import { Request, Response } from "express";
import { GetLocationsUseCase } from "./getLocationsUseCase";

export class GetLocationsController {
  constructor(private getLocationsUseCase: GetLocationsUseCase){}

  async handle(request: Request, response: Response){
    const locations = await this.getLocationsUseCase.execute()

    return response.status(200).json(locations)
  }
}