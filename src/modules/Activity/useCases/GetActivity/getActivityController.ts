import { Request, Response } from "express";
import { GetActivityUseCase } from "./getActivityUseCase";

export class GetActivityController {
  constructor(private getActivityUseCase: GetActivityUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params
    const activity = await this.getActivityUseCase.execute(id)

    return response.status(200).json(activity)
  }
}