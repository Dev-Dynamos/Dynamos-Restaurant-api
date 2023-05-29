import { Request, Response } from 'express';
import { GetKinshipUseCase } from './GetKinshipUseCase';

class GetKinshipController {
  constructor(private getKinshipUseCase: GetKinshipUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const kinship = await this.getKinshipUseCase.execute({ id });
    return res.status(200).json(kinship);
  }
}

export { GetKinshipController };