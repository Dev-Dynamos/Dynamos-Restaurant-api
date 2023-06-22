import { UpdateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { ClerkRepository } from "../repository/implements/ClerkRepository";

export class UpdateClerkUseCase {
  constructor(private clerkRepository: ClerkRepository) {}

  async execute({ id, name, email, telefone, cargoId }: UpdateClerkDTO) {
    const clerk = await this.clerkRepository.update({
      id,
      name,
      email,
      telefone,
      cargoId,
    });

    return clerk;
  }
}
