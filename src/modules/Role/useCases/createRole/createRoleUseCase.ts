import { RequestError } from "../../../../typeErrors/error-api";
import { RoleDTO } from "../../dtos";
import { RoleRepository } from "../../repositories/implementation/RoleRepository";

export class CreateRoleUseCase {
  constructor(private roleRepository: RoleRepository){}

  async execute({ nome }: RoleDTO){
    const roleAlreadyExists = await this.roleRepository.findByName(nome)

    if(roleAlreadyExists) throw new RequestError("Cargo/Função já existente", 400)

    const newRole = await this.roleRepository.save({ nome })
    return newRole
  }
}