import { CreateClientDTO } from "../clientDTOs/CreateClientDTO";
import { IClientRepository } from "../repository/IClientRepository";

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({ nome, email, password, telefone }: CreateClientDTO) {
    const client = await this.clientRepository.create({
      nome,
      email,
      password,
      telefone,
    });

    return client;
  }
}
