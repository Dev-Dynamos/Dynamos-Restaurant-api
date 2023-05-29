import { Request, Response } from 'express';
import { UpdateContactUseCase } from './UpdateContactUseCase';

class UpdateContactController {
  constructor(private updateContactUseCase: UpdateContactUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { numeroTelefone, email } = req.body;
    const { id } = req.params;
    
    const contactUpdated = await this.updateContactUseCase.execute({ id, numeroTelefone, email });

    return res.status(200).json(contactUpdated);
  }
}

export { UpdateContactController };