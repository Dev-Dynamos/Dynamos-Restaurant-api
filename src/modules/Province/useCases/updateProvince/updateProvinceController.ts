import { Request, Response } from "express";
import { UpdateProvinceUseCase } from "./updateProvinceUseCase";
import * as Yup from 'yup'
import { RequestError } from "../../../../typeErrors/error-api";

export class UpdateProvinceController {
  constructor(private updateProvinceUseCase: UpdateProvinceUseCase){}

  async handle(request: Request, response: Response){
    const validation = Yup.object().shape({
      nome: Yup.string().required("O nome é obrigatório"),
    })

    const { nome } =  request.body
    const { id } = request.params

    if(
      !(await validation.isValid({
        nome
      }))
    ) throw new RequestError("Preencha todos os campos", 400)


    const province = await this.updateProvinceUseCase.execute({id, nome})
    return response.status(200).json(province)
  }
}