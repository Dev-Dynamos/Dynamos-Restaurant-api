import { Request, Response } from 'express';
import { GetKinshipsUseCase } from './GetKinshipsUseCase';

class GetKinshipsController {
  constructor(private getKinshipsUseCase: GetKinshipsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const kinships = await this.getKinshipsUseCase.execute();
    return res.status(200).json(kinships);
  }
}

export { GetKinshipsController };