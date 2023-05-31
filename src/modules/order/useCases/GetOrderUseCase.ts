import { OrderRepository } from "../repository/implements/OrderRepository";

export class GetOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute() {
    const order = await this.orderRepository.get();

    return order;
  }
}
