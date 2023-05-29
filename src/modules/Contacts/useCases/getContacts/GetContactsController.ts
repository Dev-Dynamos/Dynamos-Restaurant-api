import { Request, Response } from 'express';
import { GetContactsUseCase } from './GetContactsUseCase';

class GetContactsController {
  constructor(private getContactsUseCase: GetContactsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const contacts = await this.getContactsUseCase.execute();
    return res.status(200).json(contacts);
  }
}

export { GetContactsController };