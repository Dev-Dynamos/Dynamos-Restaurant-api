import { OrderRepository } from "../repository/implements/OrderRepository";

export class DeleteOrderUseCase {
  constructor(private orderRepository: OrderRepository) {}

  async execute(id: string) {
    const order = this.orderRepository.delete(id);

    return order;
  }
}
