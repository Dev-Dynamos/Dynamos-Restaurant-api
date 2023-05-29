import { Request, Response } from "express";
import { GetRoleUseCase } from "./getRoleUseCase";

export class GetRoleController {
  constructor(private getRoleUseCase: GetRoleUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const role = await this.getRoleUseCase.execute(id)
    return response.status(200).json(role)
  }
}