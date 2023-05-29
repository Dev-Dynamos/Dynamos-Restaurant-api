import { RequestError } from "../../../../typeErrors/error-api";
import { RoleRepository } from "../../repositories/implementation/RoleRepository";

export class GetRoleUseCase {
  constructor(private roleRepository: RoleRepository){}

  async execute(id: string){
    const role = await this.roleRepository.findById(id)

    if(!role) throw new RequestError("Cargo/Função não encontrada.", 404)

    return role
  }
}