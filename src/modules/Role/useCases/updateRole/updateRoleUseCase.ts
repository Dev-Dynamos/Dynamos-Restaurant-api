import { RequestError } from "../../../../typeErrors/error-api";
import { RoleDTO } from "../../dtos";
import { RoleRepository } from "../../repositories/implementation/RoleRepository";

export class UpdateRoleUseCase {
  constructor(private roleRepository: RoleRepository){}

  async execute({ id, nome }: RoleDTO){
    const roleExists = await this.roleRepository.findById(id)

    if(!roleExists) throw new RequestError("Cargo/Função não encontrada.", 404)

    const rolesNameExists = await this.roleRepository.findByName(nome)

    if(rolesNameExists) throw new RequestError("Esse cargo/função já existe.", 400)

    const updatedRole = await this.roleRepository.update({ id, nome })
    return updatedRole

  }
}
