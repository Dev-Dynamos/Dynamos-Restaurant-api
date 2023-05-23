import { ClerkRepository } from "../repository/implements/clerkRepository";

export class GetClerskUseCase {
  constructor(private clerkRepository: ClerkRepository) {}

  async execute() {
    const clerks = this.clerkRepository.get();

    return clerks;
  }
}
