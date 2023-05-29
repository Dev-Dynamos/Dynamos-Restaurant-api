import { Request, Response } from "express";
import { GetUserUseCase } from "./getUserUseCase";

export class GetActivityController {
  constructor(private getUserUseCase: GetUserUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params
    const user = await this.getUserUseCase.execute(id)

    return response.status(200).json(user)
  }
}