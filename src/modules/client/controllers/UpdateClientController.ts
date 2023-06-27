import { Request, Response } from "express";
import { UpdateClientUseCase } from "../useCases/UpdateClientUseCase";

export class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, telefone, password } = req.body;

    const client = await this.updateClientUseCase.execute({
      id,
      nome,
      email,
      password,
      telefone,
    });

    return res.status(200).json(client);
  }
}
