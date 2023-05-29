import { Cargo } from "@prisma/client";
import { RoleDTO } from "../../dtos";
import { prisma } from "../../../../prisma/client";

import { IRoleRepository } from "../IRoleRepository";

export class RoleRepository implements IRoleRepository {
  async findById(id: string): Promise<Cargo> {
    const role = await prisma.cargo.findUnique({
      where: {
        id: id
      }
    })

    return role
  }

  async findByName(nome: string): Promise<Cargo> {
    const role = await prisma.cargo.findFirst({
      where: {
        nome: nome
      }
    })

    return role
  }

  async save({ nome }: RoleDTO): Promise<Cargo> {
    const role = await prisma.cargo.create({
      data: {
        nome: nome
      }
    })

    return role
  }

  async delete(id: string): Promise<Cargo> {
    const role = await prisma.cargo.delete({
      where: {
        id: id
      }
    })

    return role
  }

  async update({ id, nome }: RoleDTO): Promise<Cargo> {
    const role = await prisma.cargo.update({
      where: {
        id: id
      }, 
      data: {
        nome: nome
      }
    })

    return role
  }

  async getRoles(): Promise<Cargo[]> {
    const roles = await prisma.cargo.findMany()

    return roles
  }
}