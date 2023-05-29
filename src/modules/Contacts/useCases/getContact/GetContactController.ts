import { Request, Response } from 'express';
import { GetContactUseCase } from './GetContactUseCase';

class GetContactController {
  constructor(private getContactUseCase: GetContactUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const contact = await this.getContactUseCase.execute({ id });
    return res.status(200).json(contact);
  }
}

export { GetContactController };