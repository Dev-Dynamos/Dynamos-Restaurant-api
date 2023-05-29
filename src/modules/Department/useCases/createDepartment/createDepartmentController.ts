import { Request, Response } from "express";
import { CreateDepartmentUseCase } from "./createDepartmentUseCase";

export class CreateDepartmentController {
  constructor(private createDepartmentUseCase: CreateDepartmentUseCase){}

  async handle(request: Request, response: Response){
    const { nome, organigramaId } = request.body

    const departament = await this.createDepartmentUseCase.execute({ nome, organigramaId })
    return response.status(200).json(departament)
  }
}