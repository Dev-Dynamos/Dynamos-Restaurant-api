import { AdminRepository } from "../repository/implement/AdminRepository";

export class DeleteAdminUseCase {
  constructor(private adminRepository: AdminRepository) {}

  async execute(id: string) {
    const admin = this.adminRepository.delete(id);

    return admin;
  }
}
