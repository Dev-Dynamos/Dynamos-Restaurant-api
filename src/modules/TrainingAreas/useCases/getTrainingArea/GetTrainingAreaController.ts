import { Request, Response } from 'express';
import { GetTrainingAreaUseCase } from './GetTrainingAreaUseCase';

class GetTrainingAreaController {
  constructor(private getSpecificTrainingAreaUseCase: GetTrainingAreaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const trainingArea = await this.getSpecificTrainingAreaUseCase.execute({ id });
    return res.status(200).json(trainingArea);
  }
}

export { GetTrainingAreaController };