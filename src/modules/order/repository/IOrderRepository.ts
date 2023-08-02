import { Pedido } from "@prisma/client";
import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { Order } from "../model/Order";
import { UpdateOrderDTO } from "../OrderDTOs/UpdateOrderDTO";

export interface IOrderRepository {
  create({
    status,
    descricao,
    localizacao,
    clienteId,
    productoId,
    menuId,
  }: CreateOrderDTO): Promise<Pedido>;
  get(): Promise<Pedido[]>;
  delete: (id: string) => Promise<Pedido>;
  findById: (id: string) => Promise<Pedido | null>;
  update(updateData: UpdateOrderDTO): Promise<Pedido>;
}
