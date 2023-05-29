import { Request, Response } from "express";
import { GetOfficialsUseCase } from "./getOfficialsUseCase";

export class GetOfficialsController {
  constructor(private getOfficialsUseCase: GetOfficialsUseCase){}

  async handle(request: Request, response: Response){
    const official = await this.getOfficialsUseCase.execute()

    return response.status(200).json(official)
  }
}