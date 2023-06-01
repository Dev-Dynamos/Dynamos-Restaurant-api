import { ClientRepository } from "../repository/implement/ClientRepository";
export class GetClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute() {
    const client = await this.clientRepository.get();

    return client;
  }
}
