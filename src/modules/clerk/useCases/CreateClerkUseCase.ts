import { CreateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { IClerkRepository } from "../repository/IClerkRepository";

export class CreateClerkUseCase {
  constructor(private clerkReporitory: IClerkRepository) {}

  async execuse({ name }: CreateClerkDTO) {
    const createClerk = this.clerkReporitory.create({ name });

    return createClerk;
  }
}
