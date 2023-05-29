import { Request, Response } from 'express';
import { GetSchoolSubjectUseCase } from './GetSchoolSubjectUseCase';

class GetSchoolSubjectController {
  constructor(private getSchoolSubjectUseCase: GetSchoolSubjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const course = await this.getSchoolSubjectUseCase.execute({ id });
    return res.status(200).json(course);
  }
}

export { GetSchoolSubjectController };