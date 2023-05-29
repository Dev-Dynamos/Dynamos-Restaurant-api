import { RequestError } from "../../../../typeErrors/error-api";
import { UserRepository } from "../../repositories/implementation/UserRepository";

export class GetUserUseCase {
  constructor(private userRepository: UserRepository){}

  async execute(id: string){
    const user = await this.userRepository.findById(id)

    if(!user) throw new RequestError("usuario não encontrado.", 404)

    return user
  }
}