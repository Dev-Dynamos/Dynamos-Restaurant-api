import { prismaClient } from "../../../../database/prismaClient";
import { CreateAdminDTO } from "../../adminDTOs/CreateAdminDTO";
import { Admin } from "../../model/Admin";
import { IAdminRepository } from "../IAdminRepository";

export class AdminRepository implements IAdminRepository {
  private admins: Admin[] = [];

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
}
