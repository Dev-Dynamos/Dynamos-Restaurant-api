import { Request, Response } from "express";
import { GetActivitiesUseCase } from "./getActivitiesUseCase";

export class GetActivitiesController {
  constructor(private getActivitiesUseCase: GetActivitiesUseCase){}

  async handle(request: Request, response: Response){
    const activities = await this.getActivitiesUseCase.execute()

    return response.status(200).json(activities)
  }
}