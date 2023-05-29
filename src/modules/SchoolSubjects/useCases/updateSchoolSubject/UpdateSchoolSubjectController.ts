import { Request, Response } from 'express';
import { UpdateSchoolSubjectUseCase } from './UpdateSchoolSubjectUseCase';

class UpdateSchoolSubjectController {
  constructor(private updateSchoolSubjectUseCase: UpdateSchoolSubjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, descricao } = req.body;
    const { id } = req.params;
    
    const schoolSubjectUpdated = await this.updateSchoolSubjectUseCase.execute({ nome, descricao, id });

    return res.status(200).json(schoolSubjectUpdated);
  }
}

export { UpdateSchoolSubjectController };