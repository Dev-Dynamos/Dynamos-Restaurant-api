import { Pedido } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { CreateOrderDTO } from "../../OrderDTOs/CreateOrderDTO";
import { Order } from "../../model/Order";
import { IOrderRepository } from "../IOrderRepository";
import { UpdateOrderDTO } from "../../OrderDTOs/UpdateOrderDTO";

export class OrderRepository implements IOrderRepository {
  async create({
    descricao,
    localizacao,
    clienteId,
    productoId,
    menuId,
    status,
  }: CreateOrderDTO): Promise<Pedido> {
    const order = await prismaClient.pedido.create({
      data: {
        status,
        descricao,
        localizacao,
        clienteId,
        productoId,
        menuId,
      },
    });
    return order;
  }

  async get(): Promise<Pedido[]> {
    const Order = await prismaClient.pedido.findMany({
      include:{
        cliente: true,
        produto: {
          include:{
            ficheiro: true,
            categoria: true
          }
        },
        menu: true
      }
    });
    return Order;
  }

  async delete(id: string): Promise<Pedido> {
    const order = await prismaClient.pedido.delete({
      where: {
        id,
      },
    });
    return order;
  }

  async update(updateData: UpdateOrderDTO): Promise<Pedido> {
    const pedido = prismaClient.pedido.update({
      data: updateData,
      where: {
        id: updateData.id
      }
    });

    return pedido;
  }


  async findById(id: string): Promise<Pedido | null> {
    const pedido = await prismaClient.pedido.findUnique({
      where: {
        id
      }
    });

    return pedido
  }
}
