import { CreateAdminDTO } from "../../adminDTOs/CreateAdminDTO";
import { Admin } from "../../model/Admin";
import { IAdminRepository } from "../IAdminRepository";

export class AdminRepository implements IAdminRepository {
  private admins: Admin[] = [];

  async create({ name, email, password }: CreateAdminDTO) {
    const admin = new Admin(name, email, password);

    this.admins.push(admin);
    return admin;
  }
}
