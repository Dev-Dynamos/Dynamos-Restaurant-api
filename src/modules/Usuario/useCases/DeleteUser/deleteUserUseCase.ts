import { RequestError } from "../../../../typeErrors/error-api";
import { UserRepository } from "../../repositories/implementation/UserRepository";

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository){}

  async execute(id: string){
    const userExists = await this.userRepository.findById(id)

    if(!userExists) throw new RequestError("usuario não encontrado", 404)

    const deletedUser = await this.userRepository.delete(id)
    return deletedUser
  }
}