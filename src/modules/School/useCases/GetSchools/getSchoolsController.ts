import { Request, Response } from "express";
import { GetSchoolsUseCase } from "./getSchoolsUseCase";

export class GetSchoolsController {
  constructor(private getSchoolsUseCase: GetSchoolsUseCase){}

  async handle(request: Request, response: Response){
    const schools = await this.getSchoolsUseCase.execute()

    return response.status(200).json(schools)
  }
}