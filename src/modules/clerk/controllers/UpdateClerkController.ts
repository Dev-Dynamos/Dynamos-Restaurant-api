import { Request, Response } from "express";
import { UpdateClerkUseCase } from "../useCases/UpdateClerkUseCase";

export class UpdateClerkController {
  constructor(private updateClerkUseCase: UpdateClerkUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, telefone, cargoId } = req.body;

    const clerk = await this.updateClerkUseCase.execute({
      id,
      name,
      email,
      telefone,
      cargoId,
    });

    return res.status(200).json(clerk);
  }
}
