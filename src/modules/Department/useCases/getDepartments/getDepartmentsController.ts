import { Request, Response } from "express";
import { GetDepartmentsUseCase } from "./getDepartmentsUseCase";

export class GetDepartmentsController {
  constructor(private getDepartmentsUseCase: GetDepartmentsUseCase){}

  async handle(request: Request, response: Response){
    const department = await this.getDepartmentsUseCase.execute()

    return response.status(200).json(department)
  }
}