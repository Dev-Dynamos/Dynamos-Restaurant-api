import { Request, Response } from "express";
import { CreateOfficialUseCase } from "./createOfficialUseCase";
import * as Yup from "yup"
import { RequestError } from "../../../../typeErrors/error-api";
import { OfficialDTO } from "../../dtos";

export class CreateOfficialController {
  constructor(private createOfficialUseCase: CreateOfficialUseCase) { }

  async handle(request: Request, response: Response) {
    const data: OfficialDTO = request.body
    const { nome, sexo, contatoId, cargoId, departamentoId, numero_agente } = data;

    const schema = Yup.object().shape({
      nome: Yup.string().required("O campo nome é obrigatório"),
      sexo: Yup.string().required("O campo nome é obrigatório"),
      cargoId: Yup.string().required("O campo cargo é obrigatório"),
      departamentoId: Yup.string().required("O campo departamento é obrigatório"),
      numero_agente: Yup.string().required("O campo numero de agente é obrigatório"),
    })
    if (
      !(await schema.isValid({
        nome,
        sexo,
        cargoId,
        departamentoId,
        numero_agente,
      }))
    ) {
      throw new RequestError("Preencha os campos obrigatórios!", 400)
    }

    Object.assign(data, {
      sexo: data.sexo.toUpperCase()
    })

    const official = await this.createOfficialUseCase.execute(data)
    return response.status(201).json(official)
  }
}