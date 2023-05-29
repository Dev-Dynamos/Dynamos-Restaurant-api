import { Request, Response } from "express";
import { UpdateSchoolUseCase } from "./updateSchoolUseCase";

export class UpdateSchoolController {
  constructor(private updateSchoolUseCase: UpdateSchoolUseCase){}

  async handle(request: Request, response: Response){
    const { nome, nif, logo_url, categoriaId } = request.body
    const { id } = request.params

    const school = await this.updateSchoolUseCase.execute({ id, nome, nif, logo_url, categoriaId })
    return response.status(200).json(school)
  }
}