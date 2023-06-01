import { ClerkRepository } from "../repository/implements/ClerkRepository";

export class DeleteClerkUseCase {
  constructor(private clerkRepository: ClerkRepository) {}

  async execute(id: string) {
    const clerk = this.clerkRepository.delete(id);

    return clerk;
  }
}
