import { Request, Response } from "express";
import { UpdateRoleUseCase } from "./updateRoleUseCase";

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase){}

  async handle(request: Request, response: Response){
    const { nome } = request.body
    const { id } = request.params

    const role = await this.updateRoleUseCase.execute({ id, nome })
    return response.status(200).json(role)
  }
}