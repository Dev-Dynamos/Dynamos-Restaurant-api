import { Request, Response } from "express";
import { CreateActivityUseCase } from "./createActivityUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


export class CreateActivityController {
  constructor(private createActivityUseCase: CreateActivityUseCase) { }

  async handle(req: Request, res: Response) {
    const { nome, data, organizador, escolaId, fotoUrl } = req.body
    const schema = Yup.object().shape({
      nome: Yup.string().required("O campo nome é obrigatório"),
      data: Yup.string().required("O campo data é obrigatório"),
      organizador: Yup.string().required("O campo organizador é obrigatório"),
      escolaId: Yup.string().required("O campo escola é obrigatório"),
    })
    if (
      !(await schema.isValid({
        nome,
        data,
        organizador,
        escolaId
      }))
    ) {
      throw new RequestError("Preencha os campos obrigatórios!", 400)
    }

    const activity = await this.createActivityUseCase.execute({ nome, data, organizador, escolaId, fotoUrl })
    return res.status(201).json(activity)
  }
}