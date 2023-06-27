import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { Order } from "../model/Order";

export interface IOrderRepository {
  create({
    status,
    descricao,
    localizacao,
    clienteId,
    productoId,
    menuId,
  }: CreateOrderDTO): Promise<Order>;
  get(): Promise<Order[]>;
  delete: (id: string) => Promise<Order>;
}
