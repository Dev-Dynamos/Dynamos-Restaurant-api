import { Request, Response } from "express";
import { FindSchoolsByProvinceUseCase } from "./findSchoolsByProvinceUseCase";

export class FindSchoolsByProvinceController {
  constructor(private findSchoolsByProvinceUseCase: FindSchoolsByProvinceUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params;
    
    const school = await this.findSchoolsByProvinceUseCase.execute({ id })
    return response.status(200).json(school)
  }
}