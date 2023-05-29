import { RequestError } from "../../../../typeErrors/error-api";
import { RoleRepository } from "../../repositories/implementation/RoleRepository";

export class DeleteRoleUseCase {
  constructor(private roleRepository: RoleRepository){}
  
  async execute(id: string){
    const roleExists = await this.roleRepository.findById(id)

    if(!roleExists) throw new RequestError("Cargo/Função não encontrada.", 404)

    const deletedRole = await this.roleRepository.delete(id)
    return deletedRole
  }
}