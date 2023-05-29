import { Request, Response } from "express";
import { IKinshipDTO } from "../../dtos/CreateKinshipDTO";
import { CreateKinshipUseCase } from "./CreateKinshipUseCase";
import * as yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


class CreateKinshipController {
  constructor(private createKinshipUseCase: CreateKinshipUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const schema = yup.object().shape({
      nome: yup.string().required(),
      designacao: yup.string().required(),
      contatoId: yup.string().required(),
    })

    const { nome, designacao, contatoId, candidatoId }: IKinshipDTO = req.body;

    if (!(await schema.isValid({ nome, designacao, contatoId }))) {
      throw new RequestError("Preencha os campos obrigatórios!", 400);
    }

    const kinship = await this.createKinshipUseCase.execute({ nome, designacao, contatoId, candidatoId });
    return res.status(201).json(kinship)
  }
}

export { CreateKinshipController };