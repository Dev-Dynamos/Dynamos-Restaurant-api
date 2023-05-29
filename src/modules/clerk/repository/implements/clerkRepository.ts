import { prismaClient } from "../../../../database/prismaClient";
import { CreateClerkDTO } from "../../ClerkDTOs/CreateClerkDTO";
import { Clerk } from "../../model/Clerk";
import { IClerkRepository } from "../IClerkRepository";

export class ClerkRepository implements IClerkRepository {
  private clerks: Clerk[] = [{ id: "d8fregui", name: "freufioreifi" }];

  async create({
    name,
    email,
    telefone,
    cargiId,
  }: CreateClerkDTO): Promise<Clerk> {
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

  async get(): Promise<Clerk[]> {
    const clerk = await prismaClient.funcionario.findMany();
    return clerk;
  }
}
