import { RoleRepository } from "../../repositories/implementation/RoleRepository";

export class GetRolesUseCase {
  constructor(private roleRepository: RoleRepository){}

  async execute(){
    const roles = await this.roleRepository.getRoles()

    return roles
  }
}