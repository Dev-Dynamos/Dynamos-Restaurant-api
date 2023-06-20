import { UpdateAdminDTO } from "../adminDTOs/CreateAdminDTO";
import { AdminRepository } from "../repository/implement/AdminRepository";

export class UpdateAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  async execute({ email, name, password, id }: UpdateAdminDTO) {
    const admin = await this.adminRepository.update({
      email,
      name,
      password,
      id,
    });

    return admin;
  }
}
