import { ClientRepository } from "../repository/implement/ClientRepository";

export class DeleteClientUseCase {
  constructor(private clientRepository: ClientRepository) {}

  async execute(id: string) {
    const client = this.clientRepository.delete(id);

    return client;
  }
}
