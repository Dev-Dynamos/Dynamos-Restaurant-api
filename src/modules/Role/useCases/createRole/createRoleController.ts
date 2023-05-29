import { Request, Response } from "express";
import { CreateRoleUseCase } from "./createRoleUseCase";

export class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase){}

  async handle(request: Request, response: Response){
    const { nome } = request.body

    const role = await this.createRoleUseCase.execute({nome})
    return response.status(201).json(role)
  }
}