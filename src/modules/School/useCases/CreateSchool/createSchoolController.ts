import { Request, Response } from "express";
import { CreateSchoolUseCase } from "./createSchoolUseCase";
import * as yup from 'yup'
import { RequestError } from "../../../../typeErrors/error-api";

export class CreateSchoolController {
  constructor(private createSchoolUseCase: CreateSchoolUseCase) { }

  async handle(request: Request, response: Response) {
    const schema = yup.object().shape({
      nome: yup.string().required(),
      nif: yup.string().required(),
      logo_url: yup.string(),
      categoriaId: yup.string().required()
    })

    const { nome, nif, logo_url, categoriaId, fotoUrl } = request.body

    if (
      !(await schema.isValid({
        nome, nif, logo_url, categoriaId
      }))
    ) {
      throw new RequestError("Preenchimento obrigatório de todos os campos", 400)
    }

    const school = await this.createSchoolUseCase.execute({ nome, nif, logo_url, categoriaId, fotoUrl })
    return response.status(201).json(school)
  }
}