import { Request, Response } from "express";
import { GetDepartmentUseCase } from "./getDepartmentUseCase";

export class GetDepartmentController {
  constructor(private getDepartmentUseCase: GetDepartmentUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const department = await this.getDepartmentUseCase.execute(id)
    return response.status(200).json(department)
  }
}