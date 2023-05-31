import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { Order } from "../model/Order";

export interface IOrderRepository {
  create({
    descricao,
    localizacao,
    idCliente,
    idProducto,
    idMenu,
    status,
  }: CreateOrderDTO): Promise<Order>;
  get(): Promise<Order[]>;
}
