import { Response, Request } from "express";
import { CreateClerkUseCase } from "../useCases/CreateClerkUseCase";

export class CreateClerkController {
  constructor(private createClerkUseCase: CreateClerkUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, telefone, cargoId } = req.body;

    const clerk = await this.createClerkUseCase.execute({
      name,
      email,
      telefone,
      cargoId,
    });

    return res.status(201).json(clerk);
  }
}
