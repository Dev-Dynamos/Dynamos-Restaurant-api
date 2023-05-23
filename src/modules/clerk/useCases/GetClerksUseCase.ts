import { ClerkRepository } from "../repository/implements/clerkRepository";

export class GetClerskUseCase {
  constructor(private clerkRepository: ClerkRepository) {}

  async execute() {
    const clerks = await this.clerkRepository.get();

    return clerks;
  }
}
