import { DeleteOrderUseCase } from "../useCases/DeleteOrderUseCase";
import { Response, Request } from "express";

export class DeleteOrderController {
  constructor(private deleteOrderUseCase: DeleteOrderUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const order = await this.deleteOrderUseCase.execute(id);

    return res.status(200).json(order);
  }
}
