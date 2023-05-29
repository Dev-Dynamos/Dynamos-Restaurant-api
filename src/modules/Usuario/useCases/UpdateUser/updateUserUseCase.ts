import { RequestError } from "../../../../typeErrors/error-api";
import { UserDTO } from "../../dtos";
import { UserRepository } from "../../repositories/implementation/UserRepository";

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ nome, senha, email, fotoUrl }: UserDTO, id: string) {
    const userExists = await this.userRepository.findById(id)

    if (!userExists) throw new RequestError("Usuario não encontrado.", 404)

    const updatedUser = await this.userRepository.update({ nome, senha, email, fotoUrl }, id)
    return updatedUser
  }
}