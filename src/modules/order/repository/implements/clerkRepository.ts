import { prismaClient } from "../../../../database/prismaClient";
import { CreateOrderDTO } from "../../OrderDTOs/CreateOrderDTO";
import { Order } from "../../model/Order";
import { IClerkRepository } from "../IClerkRepository";

export class ClerkRepository implements IClerkRepository {
  async create({
    name,
    email,
    telefone,
    cargiId,
  }: CreateOrderDTO): Promise<Order> {
    const clerk = await prismaClient.funcionario.create({
      data: {
        name,
        email,
        telefone,
        cargiId,
      },
    });
    return clerk;
  }

  async get(): Promise<Order[]> {
    const clerk = await prismaClient.funcionario.findMany();
    return clerk;
  }
}
