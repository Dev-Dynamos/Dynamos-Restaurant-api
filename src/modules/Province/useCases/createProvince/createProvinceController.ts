import { Request, Response } from "express";
import { CreateProvinceUseCase } from "./createProvinceUseCase";
import * as Yup from 'yup'
import { RequestError } from "../../../../typeErrors/error-api";

export class CreateProvinceController {
  constructor(private createProvinceUseCase: CreateProvinceUseCase){}

  async handle(request: Request, response: Response){
      const validation = Yup.object().shape({
        nome: Yup.string().required("O nome é obrigatório"),
      })
  
      const { nome } =  request.body
  
      if(
        !(await validation.isValid({
          nome
        }))
      ) throw new RequestError("Preencha todos os campos", 400)
  
  
      const province = await this.createProvinceUseCase.execute({ nome })
      return response.status(201).json(province)
  }
}