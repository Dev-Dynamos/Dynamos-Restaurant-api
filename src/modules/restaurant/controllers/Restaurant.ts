import { Request, Response } from "express";
import { CreateRestaurantUseCase } from "../useCases/CreateRestaurantUseCase";

export class CreateRestaurantController {
  constructor(private createRestaurantUseCase: CreateRestaurantUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { nome, endereco, telefone } = Req.body;

    const position = await this.createRestaurantUseCase.execute({
      nome,
      endereco,
      telefone,
    });

    return Res.status(201).json(position);
  }
}
