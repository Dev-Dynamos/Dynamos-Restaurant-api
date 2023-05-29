import { Request, Response } from "express";
import { CreateContactUseCase } from "./CreateContactUseCase";


class CreateContactController {
  constructor(private createContactUseCase: CreateContactUseCase) {}
  
  async handle(req: Request, res: Response): Promise<Response>  {
    
    const { numeroTelefone, email } = req.body;

    const contact = await this.createContactUseCase.execute({ numeroTelefone, email });
    return res.status(201).json(contact)
  }
}

export { CreateContactController };