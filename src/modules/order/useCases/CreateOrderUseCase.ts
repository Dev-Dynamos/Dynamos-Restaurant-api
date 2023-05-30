import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { IClerkRepository } from "../repository/IClerkRepository";

export class CreateOrderUseCase {
  constructor(private orderRepository: IClerkRepository) {}

  async execute({ name, email, telefone, cargiId }: CreateOrderDTO) {
    const order = await this.orderRepository.create({
      name,
      email,
      telefone,
      cargiId,
    });

    return order;
  }
}
