import { Request, Response } from "express";
import { CreatePositionUseCase } from "../useCases/CreatePositionUseCase";

export class CreatePositionController {
  constructor(private createPositionUseCase: CreatePositionUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { nome } = Req.body;

    const position = await this.createPositionUseCase.execute({
      nome,
    });

    return Res.status(201).json(position);
  }
}
