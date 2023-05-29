import { Request, Response } from 'express';
import { GetSchoolSubjectsUseCase } from './GetSchoolSubjectsUseCase';

class GetSchoolSubjectsController {
  constructor(private getSchoolSubjectsUseCase: GetSchoolSubjectsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const schoolSubjects = await this.getSchoolSubjectsUseCase.execute();
    return res.status(200).json(schoolSubjects);
  }
}

export { GetSchoolSubjectsController };