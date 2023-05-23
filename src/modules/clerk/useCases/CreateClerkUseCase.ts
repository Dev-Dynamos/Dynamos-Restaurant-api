import { CreateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { IClerkRepository } from "../repository/IClerkRepository";

export class CreateClerkUseCase {
  constructor(private clerkRepository: IClerkRepository) {}

  async execute({ name }: CreateClerkDTO) {
    const clerk = await this.clerkRepository.create({ name });

    return clerk;
  }
}
