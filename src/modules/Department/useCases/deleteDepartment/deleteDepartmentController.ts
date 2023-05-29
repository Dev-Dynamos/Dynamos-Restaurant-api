import { Request, Response } from "express";
import { DeleteDepartmentUseCase } from "./deleteDepartmentUseCase";

export class DeleteDepartmentController {
  constructor(private deleteDepartmentUseCase: DeleteDepartmentUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const department = await this.deleteDepartmentUseCase.execute(id)
    return response.status(200).json(department)
  }
}