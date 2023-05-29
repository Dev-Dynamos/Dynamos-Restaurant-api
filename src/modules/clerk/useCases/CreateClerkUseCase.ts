import { CreateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { IClerkRepository } from "../repository/IClerkRepository";

export class CreateClerkUseCase {
  constructor(private clerkRepository: IClerkRepository) {}

  async execute({ name, email, telefone, cargiId }: CreateClerkDTO) {
    const clerk = await this.clerkRepository.create({
      name,
      email,
      telefone,
      cargiId,
    });

    return clerk;
  }
}
