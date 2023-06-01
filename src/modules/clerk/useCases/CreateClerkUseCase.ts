import { CreateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { IClerkRepository } from "../repository/IClerkRepository";

export class CreateClerkUseCase {
  constructor(private clerkRepository: IClerkRepository) {}

  async execute({ name, email, telefone, cargoId }: CreateClerkDTO) {
    const clerk = await this.clerkRepository.create({
      name,
      email,
      telefone,
      cargoId,
    });

    return clerk;
  }
}
