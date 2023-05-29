import { Request, Response } from 'express';
import { GetCoursesUseCase } from './GetCoursesUseCase';

class GetCoursesController {
  constructor(private getCoursesUseCase: GetCoursesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const courses = await this.getCoursesUseCase.execute();
    return res.status(200).json(courses);
  }
}

export { GetCoursesController };