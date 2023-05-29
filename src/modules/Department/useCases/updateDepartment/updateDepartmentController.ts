import { Request, Response } from "express";
import { UpdateDepartmentUseCase } from "./updateDepartmentUseCase";

export class UpdateDepartmentController {
  constructor(private updateDepartmentUseCase: UpdateDepartmentUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params
    const { nome, organigramaId } = request.body

    const department = await this.updateDepartmentUseCase.execute({id, nome, organigramaId})
    return response.status(200).json(department)
  }
}