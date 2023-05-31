import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { IOrderRepository } from "../repository/IOrderRepository";

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute({
    descricao,
    localizacao,
    idCliente,
    idProducto,
    idMenu,
  }: CreateOrderDTO) {
    const order = await this.orderRepository.create({
      descricao,
      localizacao,
      idCliente,
      idProducto,
      idMenu,
    });

    return order;
  }
}
