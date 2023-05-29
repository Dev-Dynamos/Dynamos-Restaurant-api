import { Request, Response } from "express";
import { DeleteSchoolUseCase } from "./deleteSchoolUseCase";

export class DeleteSchoolController {
  constructor(private deleteSchoolUseCase: DeleteSchoolUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const school = await this.deleteSchoolUseCase.execute(id)
    return response.status(200).json(school)
  }
}