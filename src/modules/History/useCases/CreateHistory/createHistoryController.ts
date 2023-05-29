import { Request, Response } from "express";
import { CreateHistoryUseCase } from "./createHistoryUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


export class CreateHistoryController {
  constructor(private createHistoryUseCase: CreateHistoryUseCase) { }

  async handle(req: Request, res: Response) {
    const schema = Yup.object().shape({
      descricao: Yup.string().required("O campo descrição é obrigatório"),
      fundador: Yup.string().required("O fundador é obrigatório"),
      escolaId: Yup.string().required("O campo escola é obrigatório"),
    })
    const { descricao, fundador, escolaId, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 } = req.body
    if (
      !(await schema.isValid({
        descricao,
        fundador,
        escolaId
      }))
    ) {
      throw new RequestError("Preencha os campos obrigatórios!", 400)
    }

    const history = await this.createHistoryUseCase.execute({ descricao, fundador, escolaId, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 })
    return res.status(201).json(history)
  }
}