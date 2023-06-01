import { prismaClient } from "../../../../database/prismaClient";
import { CreateAdminDTO } from "../../adminDTOs/CreateAdminDTO";
import { Admin } from "../../model/Admin";
import { IAdminRepository } from "../IAdminRepository";

export class AdminRepository implements IAdminRepository {
  async create({ name, email, password }: CreateAdminDTO) {
    const admin = prismaClient.admin.create({
      data: {
        name,
        email,
        password,
      },
    });

    return admin;
  }

  async get(): Promise<Admin[]> {
    const admin = await prismaClient.admin.findMany();
    return admin;
  }

  async delete(id: string): Promise<Admin> {
    const admin = await prismaClient.admin.delete({
      where: {
        id,
      },
    });
    return admin;
  }
}
