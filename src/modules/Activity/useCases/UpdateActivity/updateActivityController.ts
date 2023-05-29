import { Request, Response } from "express";
import { UpdateAtivityUseCase } from "./updateActivityUseCase";

export class UpdateActivityController {
  constructor(private updateActivityUseCase: UpdateAtivityUseCase){} 

  async handle(request: Request, response: Response){
    const {nome, data, organizador} = request.body
    const { id } = request.params

    const activity = await this.updateActivityUseCase.execute({id, nome, data, organizador})
    return response.status(200).json(activity)
  }
}