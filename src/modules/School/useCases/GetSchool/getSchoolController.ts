import { Request, Response } from "express";
import { GetSchoolUseCase } from "./getSchoolUseCase";

export class GetSchoolController {
  constructor(private getSchoolUseCase: GetSchoolUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const school = await this.getSchoolUseCase.execute(id)
    return response.status(200).json(school)
  }
}