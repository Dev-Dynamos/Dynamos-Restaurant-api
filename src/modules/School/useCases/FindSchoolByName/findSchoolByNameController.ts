import { Request, Response } from "express";
import { FindSchoolByNameUseCase } from "./findSchoolByNameUseCase";

export class FindSchoolByNameController {
  constructor(private findSchoolByNameUseCase: FindSchoolByNameUseCase){}

  async handle(request: Request, response: Response){
    const {
      search, take, skip
    } = request.query
    
    const school = await this.findSchoolByNameUseCase.execute(String(search), Number(take), Number(skip))
    return response.status(200).json(school)
  }
}