import { prismaClient } from "../../../../database/prismaClient";
import { CreateOrderDTO } from "../../OrderDTOs/CreateOrderDTO";
import { Order } from "../../model/Order";
import { IOrderRepository } from "../IOrderRepository";

export class OrderRepository implements IOrderRepository {
  async create({
    descricao,
    localizacao,
    idCliente,
    idProducto,
    idMenu,
    status,
  }: CreateOrderDTO): Promise<Order> {
    const order = await prismaClient.pedido.create({
      data: {
        status,
        descricao,
        localizacao,
        idCliente,
        idProducto,
        idMenu,
      },
    });
    return order;
  }

  async get(): Promise<Order[]> {
    const Order = await prismaClient.pedido.findMany();
    return Order;
  }
}
