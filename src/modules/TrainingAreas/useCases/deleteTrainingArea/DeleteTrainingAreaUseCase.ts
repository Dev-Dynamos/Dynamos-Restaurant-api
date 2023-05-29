import { RequestError } from "../../../../typeErrors/error-api";
import { ITrainingAreasRepository } from "../../repositories/ITrainingAreasRepository";

interface IRequest {
  id: string;
}

class DeleteTrainingAreaUseCase {
  constructor(private trainingAreasRepository: ITrainingAreasRepository) {}

  async execute({ id }: IRequest) {
    const trainingAreaExists = await this.trainingAreasRepository.findById(id);
    if(!trainingAreaExists) {
      throw new RequestError("Área de formação não encontrada!", 404);
    }

    return this.trainingAreasRepository.delete(id);
  }
}

export { DeleteTrainingAreaUseCase };