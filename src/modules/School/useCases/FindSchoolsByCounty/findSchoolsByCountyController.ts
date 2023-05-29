import { Request, Response } from "express";
import { FindSchoolsByCountyUseCase } from "./findSchoolsByCountyUseCase";

export class FindSchoolsByCountyController {
  constructor(private findSchoolsByCountyUseCase: FindSchoolsByCountyUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const schools = await this.findSchoolsByCountyUseCase.execute({ id });
    return response.status(200).json(schools)
  }
}