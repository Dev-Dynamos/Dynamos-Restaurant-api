import { Response, Request } from "express";
import { CreateOrderUseCase } from "../useCases/CreateOrderUseCase";

export class CreateClerkController {
  constructor(private createClerkUseCase: CreateOrderUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, telefone, cargiId } = req.body;

    const clerk = await this.createClerkUseCase.execute({
      name,
      email,
      telefone,
      cargiId,
    });

    return res.status(201).json(clerk);
  }
}
