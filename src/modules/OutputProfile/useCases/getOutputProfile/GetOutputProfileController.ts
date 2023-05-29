import { Request, Response } from 'express';
import { GetOutputProfileUseCase } from './GetOutputProfileUseCase';

class GetOutputProfileController {
  constructor(private getOutputProfileUseCase: GetOutputProfileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const outputProfile = await this.getOutputProfileUseCase.execute({ id });
    return res.status(200).json(outputProfile);
  }
}

export { GetOutputProfileController };