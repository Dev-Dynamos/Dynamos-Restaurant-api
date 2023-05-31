import { Response, Request } from "express";
import { GetOrderUseCase } from "../useCases/GetOrderUseCase";

export class GetOrderController {
  constructor(private getOrderUseCase: GetOrderUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const order = await this.getOrderUseCase.execute();

    return res.status(200).json(order);
  }
}
