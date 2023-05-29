import { Request, Response } from 'express';
import { UpdateCourseUseCase } from './UpdateCourseUseCase';

class UpdateCourseController {
  constructor(private updateCourseUseCase: UpdateCourseUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, descricao, fotoUrl } = req.body;
    const { id } = req.params;

    const courseUpdated = await this.updateCourseUseCase.execute({ nome, descricao, id, fotoUrl });

    return res.status(200).json(courseUpdated);
  }
}

export { UpdateCourseController };