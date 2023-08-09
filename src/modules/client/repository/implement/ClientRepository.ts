import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import {
  CreateClientDTO,
  UpdateClientDTO,
} from "../../clientDTOs/CreateClientDTO";
import { IClientRepository } from "../IClientRepository";

export class ClientRepository implements IClientRepository {
  async findByEmail(email: string): Promise<Cliente | null> {
    const client = await prismaClient.cliente.findFirst({
      where: {
        email: email,
      },
    });
    return client;
  }

  async create({
    nome,
    email,
    password,
    telefone,
  }: CreateClientDTO): Promise<Cliente> {
    const client = await prismaClient.cliente.create({
      data: {
        nome,
        email,
        password,
        telefone,
      },
    });
    return client;
  }

  async get(): Promise<Cliente[]> {
    const clients = await prismaClient.cliente.findMany();
    return clients;
  }

  async delete(id: string): Promise<Cliente | null> {
    const client = await prismaClient.cliente.delete({
      where: {
        id,
      },
    });
    return client;
  }

  async update({
    id,
    nome,
    email,
    password,
    telefone,
  }: UpdateClientDTO): Promise<Cliente | null> {
    const client = await prismaClient.cliente.update({
      data: {
        nome,
        email,
        password, // Remember to hash the password before saving it
        telefone,
      },
      where: {
        id: id,
      },
    });
    return client;
  }

  async findById(id: string): Promise<Cliente | null> {
    const client = await prismaClient.cliente.findUnique({
      where: {
        id,
      },
    });
    return client;
  }
}
