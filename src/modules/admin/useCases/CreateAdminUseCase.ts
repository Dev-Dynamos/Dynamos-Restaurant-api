import { CreateAdminDTO } from "../adminDTOs/CreateAdminDTO";
import { IAdminRepository } from "../repository/IAdminRepository";

export class CreateAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({ name, email, password }: CreateAdminDTO) {
    const admin = await this.adminRepository.create({ name, email, password });

    return admin;
  }
}
