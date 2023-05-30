import { ClerkRepository } from "../repository/implements/clerkRepository";

export class GetOrderUseCase {
  constructor(private clerkRepository: ClerkRepository) {}

  async execute() {
    const clerks = await this.clerkRepository.get();

    return clerks;
  }
}
