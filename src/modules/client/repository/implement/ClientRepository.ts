import { prismaClient } from "../../../../database/prismaClient";
import { CreateClientDTO } from "../../clientDTOs/CreateClientDTO";
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
}
