import { Request, Response } from "express";
import { CreateClientUseCase } from "../useCases/CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { nome, email, telefone, password } = Req.body;

    const client = await this.createClientUseCase.execute({
      email,
      nome,
      telefone,
      password,
    });

    return Res.status(201).json(client);
  }
}
