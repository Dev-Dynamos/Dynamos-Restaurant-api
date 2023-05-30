import { Request, Response } from "express";
import { CreateDepartamentUseCase } from "../useCases/CreateDepartamentUseCase";

export class CreateDepartamentController {
  constructor(private createPositionUseCase: CreateDepartamentUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { designacao } = Req.body;

    const position = await this.createPositionUseCase.execute({
      designacao,
    });

    return Res.status(201).json(position);
  }
}
