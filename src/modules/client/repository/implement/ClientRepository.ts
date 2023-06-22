import { prismaClient } from "../../../../database/prismaClient";
import {
  CreateClientDTO,
  UpdateClientDTO,
} from "../../clientDTOs/CreateClientDTO";
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

  async delete(id: string): Promise<Client> {
    const lient = await prismaClient.cliente.delete({
      where: {
        id,
      },
    });
    return lient;
  }

  async update({
    id,
    nome,
    email,
    password,
    telefone,
  }: UpdateClientDTO): Promise<Client> {
    const client = await prismaClient.cliente.update({
      data: {
        nome,
        email,
        password,
        telefone,
      },
      where: {
        id: id,
      },
    });

    return client;
  }
}
