import { Request, Response } from "express";
import { FindSchoolsByCategoryUseCase } from "./findSchoolsByCategoryUseCase";

export class FindSchoolsByCategoryController {
  constructor(private findSchoolsByCategoryUseCase: FindSchoolsByCategoryUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params;
    
    const schools = await this.findSchoolsByCategoryUseCase.execute({ id })
    return response.status(200).json(schools)
  }
}