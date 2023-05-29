import { Request, Response } from 'express';
import { UpdateOutputProfileUseCase } from './UpdateOutputProfileUseCase';
import * as yup from 'yup';

class UpdateOutputProfileController {
  constructor(private updateOutputProfileUseCase: UpdateOutputProfileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, descricao } = req.body;
    const { id } = req.params;
    
    const outputProfileUpdated = await this.updateOutputProfileUseCase.execute({ nome, descricao, id });

    return res.status(200).json(outputProfileUpdated);
  }
}

export { UpdateOutputProfileController };