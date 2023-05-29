import { IOutputProfileRepository } from "../../repositories/IOutputProfileRepository";

class GetOutputProfilesUseCase {
  constructor(private outputProfilesRepository: IOutputProfileRepository) {}

  async execute() {
    return await this.outputProfilesRepository.list();
  }
}

export { GetOutputProfilesUseCase };