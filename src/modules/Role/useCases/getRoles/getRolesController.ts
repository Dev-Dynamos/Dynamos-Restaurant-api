import { Request, Response } from "express";
import { GetRolesUseCase } from "./getRolesUseCase";

export class GetRolesController {
  constructor(private getRolesUseCase: GetRolesUseCase){}

  async handle(request: Request, response: Response){
    const role = await this.getRolesUseCase.execute()

    return response.status(200).json(role)
  }
}