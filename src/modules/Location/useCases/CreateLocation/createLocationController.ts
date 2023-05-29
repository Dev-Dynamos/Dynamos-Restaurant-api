import { Request, Response } from "express";
import { CreateLocationUseCase } from "./createLocationUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


export class CreateLocationController {
  constructor(private createLocationUseCase: CreateLocationUseCase){}

  async handle(request: Request, response: Response){
    const {provinciaId, municipioId, escolaId, endereco1, endereco2, candidatoId} = request.body
    const schema = Yup.object().shape({
      endereco1: Yup.string().required("O campo endereço é obrigatório"),
      provinciaId: Yup.string().required("O campo provincia é obrigatório"),
  })
  if(
      !(await schema.isValid({
          endereco1,
          provinciaId,
      }))
  ){
      throw new RequestError("Preencha os campos obrigatórios!", 400)
  }
    const location = await this.createLocationUseCase.execute({provinciaId, municipioId, escolaId, endereco1, endereco2, candidatoId})
    return response.status(201).json(location)
  }
}