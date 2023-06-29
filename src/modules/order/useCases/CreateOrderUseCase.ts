import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { IOrderRepository } from "../repository/IOrderRepository";

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute({
    status,
    descricao,
    localizacao,
    clienteId,
    productoId,
    menuId,
  }: CreateOrderDTO) {
    const order = await this.orderRepository.create({
      descricao,
      localizacao,
      clienteId,
      productoId,
      menuId,
      status,
    });

    return order;
  }
}
