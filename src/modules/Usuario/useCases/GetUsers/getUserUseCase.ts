import {  UserRepository } from "../../repositories/implementation/UserRepository";

export class GetUsersUseCase {
  constructor(private userRepository: UserRepository){}

  async execute(){
    const users = await this.userRepository.getUsers()

    return users
  }
}