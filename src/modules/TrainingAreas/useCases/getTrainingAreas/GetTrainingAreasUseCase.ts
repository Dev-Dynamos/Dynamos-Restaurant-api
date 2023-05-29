import { ITrainingAreasRepository } from "../../repositories/ITrainingAreasRepository";

class GetTrainingAreasUseCase {
  constructor(private trainingAreasRepository: ITrainingAreasRepository) {}

  async execute() {
    return await this.trainingAreasRepository.list();
  }
}

export { GetTrainingAreasUseCase };