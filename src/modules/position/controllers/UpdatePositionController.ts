import { Request, Response } from "express";
import { UpdatePositionUseCase } from "../useCases/UpdatePositionUseCase";

export class UpdateClientController {
  constructor(private updatePositionUseCase: UpdatePositionUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { nome } = req.body;

    const position = await this.updatePositionUseCase.execute({
      id,
      nome,
    });

    return res.status(200).json(position);
  }
}
