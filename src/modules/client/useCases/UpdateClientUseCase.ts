import { UpdateClientDTO } from "../clientDTOs/CreateClientDTO";
import { ClientRepository } from "../repository/implement/ClientRepository";

export class UpdateClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute({ id, nome, email, password, telefone }: UpdateClientDTO) {
    const client = await this.clientRepository.update({
      id,
      nome,
      email,
      password,
      telefone,
    });

    return client;
  }
}
