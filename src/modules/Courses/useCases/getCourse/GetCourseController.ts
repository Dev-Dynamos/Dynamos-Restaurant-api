import { Request, Response } from 'express';
import { GetCourseUseCase } from './GetCourseUseCase';

class GetCourseController {
  constructor(private getCourseUseCase: GetCourseUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const course = await this.getCourseUseCase.execute({ id });
    return res.status(200).json(course);
  }
}

export { GetCourseController };