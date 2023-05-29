import { Request, Response } from "express";
import { GetLocationUseCase } from "./getLocationUseCase";

export class GetLocationController {
  constructor(private getLocationUseCase: GetLocationUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const location = await this.getLocationUseCase.execute(id)
    return response.status(200).json(location)
  }
}