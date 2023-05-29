import { Request, Response } from "express";
import { GetOfficialUseCase } from "./getOfficlalUseCae";

export class GetOfficialController {
  constructor(private getOfficialUseCase: GetOfficialUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const official = await this.getOfficialUseCase.execute(id)
    return response.status(200).json(official)
  }
}