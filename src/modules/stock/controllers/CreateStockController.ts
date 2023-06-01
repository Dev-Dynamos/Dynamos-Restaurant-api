import { Request, Response } from "express";
import { CreateStockUseCase } from "../useCases/CreateStockUseCase";

export class CreateStockController {
  constructor(private createStockUseCase: CreateStockUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { idProducto, quantidade } = Req.body;

    const stock = await this.createStockUseCase.execute({
      idProducto,
      quantidade,
    });

    return Res.status(201).json(stock);
  }
}
