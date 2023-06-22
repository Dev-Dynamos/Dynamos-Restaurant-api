import { prismaClient } from "../../../../database/prismaClient";
import { CreateClerkDTO, UpdateClerkDTO } from "../../ClerkDTOs/CreateClerkDTO";
import { Clerk } from "../../model/Clerk";
import { IClerkRepository } from "../IClerkRepository";

export class ClerkRepository implements IClerkRepository {
  async create({
    name,
    email,
    telefone,
    cargoId,
  }: CreateClerkDTO): Promise<Clerk> {
    const clerk = await prismaClient.operador.create({
      data: {
        name,
        email,
        telefone,
        cargoId,
      },
    });
    return clerk;
  }

  async get(): Promise<Clerk[]> {
    const clerk = await prismaClient.operador.findMany();
    return clerk;
  }

  async delete(id: string): Promise<Clerk> {
    const clerk = await prismaClient.operador.delete({
      where: {
        id,
      },
    });
    return clerk;
  }

  async update({
    id,
    name,
    email,
    telefone,
    cargoId,
  }: UpdateClerkDTO): Promise<Clerk> {
    const clerk = await prismaClient.operador.update({
      data: {
        name,
        email,
        telefone,
        cargoId,
      },
      where: {
        id: id,
      },
    });

    return clerk;
  }
}
