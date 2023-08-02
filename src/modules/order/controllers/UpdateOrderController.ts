import { Request, Response } from "express";
import { manipulation } from "../../../utils/Manipulation";
import { UpdateOrderUseCase } from "../useCases/UpdateOrderUseCase";
import { UpdateOrderDTO } from "../OrderDTOs/UpdateOrderDTO";


export class UpdateOrderController {
  constructor(private updateOrderUseCase: UpdateOrderUseCase) { }

  async handle(request: Request, response: Response) {

    const { id } = request.params;
    const { body } = request;

    const updateData = manipulation.getPastProperties(body) as UpdateOrderDTO;
    updateData.id = id;

    const order = await this.updateOrderUseCase.execute(updateData);

    return response.status(200).json(order);
  }
}