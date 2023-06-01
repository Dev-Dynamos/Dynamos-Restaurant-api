import { prismaClient } from "../../../../database/prismaClient";
import { CreateClientDTO } from "../../clientDTOs/CreateClientDTO";
import { Client } from "../../model/Client";
import { IClientRepository } from "../IClientRepository";

export class ClientRepository implements IClientRepository {
  async create({ nome, email, password, telefone }: CreateClientDTO) {
    const client = prismaClient.cliente.create({
      data: {
        nome,
        email,
        password,
        telefone,
      },
    });
    return client;
  }

  async get(): Promise<Client[]> {
    const client = await prismaClient.cliente.findMany();
    return client;
  }
}
