import { Request, Response } from 'express';
import { GetOutputProfilesUseCase } from './GetOutputProfilesUseCase';

class GetOutputProfilesController {
  constructor(private getOutputProfilesUseCase: GetOutputProfilesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const outputProfiles = await this.getOutputProfilesUseCase.execute();
    return res.status(200).json(outputProfiles);
  }
}

export { GetOutputProfilesController };