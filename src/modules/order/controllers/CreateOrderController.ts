import { Response, Request } from "express";
import { CreateOrderUseCase } from "../useCases/CreateOrderUseCase";

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { descricao, localizacao, clienteId, productoId, menuId, status } =
      req.body;

    const order = await this.createOrderUseCase.execute({
      status,
      descricao,
      localizacao,
      clienteId,
      productoId,
      menuId,
    });

    return res.status(201).json(order);
  }
}
