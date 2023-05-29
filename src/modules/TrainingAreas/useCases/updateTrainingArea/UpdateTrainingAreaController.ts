import { json, Request, Response } from 'express';
import { UpdateTrainingAreaUseCase } from './UpdateTrainingAreaUseCase';
import * as yup from 'yup';

class UpdateTrainingAreaController {
  constructor(private updateTrainingAreaUseCase: UpdateTrainingAreaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, descricao } = req.body;
    const { id } = req.params;
    
    const trainingAreaUpdated = await this.updateTrainingAreaUseCase.execute({ id, nome, descricao });

    return res.status(200).json(trainingAreaUpdated);
  }
}

export { UpdateTrainingAreaController };