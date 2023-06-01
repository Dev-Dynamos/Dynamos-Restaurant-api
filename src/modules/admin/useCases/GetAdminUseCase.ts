import { AdminRepository } from "../repository/implement/AdminRepository";

export class GetAdminUseCase {
  constructor(private AdminRepository: AdminRepository) {}

  async execute() {
    const admin = await this.AdminRepository.get();

    return admin;
  }
}
