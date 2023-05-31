import { Response, Request } from "express";
import { CreateOrderUseCase } from "../useCases/CreateOrderUseCase";

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { descricao, localizacao, idCliente, idProducto, idMenu, status } =
      req.body;

    const order = await this.createOrderUseCase.execute({
      descricao,
      localizacao,
      idCliente,
      idProducto,
      idMenu,
      status,
    });

    return res.status(201).json(order);
  }
}
