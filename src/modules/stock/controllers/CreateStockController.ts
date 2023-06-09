import { Request, Response } from "express";
import { CreateStockUseCase } from "../useCases/CreateStockUseCase";

export class CreateStockController {
  constructor(private createStockUseCase: CreateStockUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { productoId, quantidade } = Req.body;

    const stock = await this.createStockUseCase.execute({
      productoId,
      quantidade,
    });

    return Res.status(201).json(stock);
  }
}
