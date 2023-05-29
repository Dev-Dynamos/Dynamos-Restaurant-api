import { RequestError } from "../../../../typeErrors/error-api";
import { ITrainingAreaDTO } from "../../dtos/TrainingAreaDTO";
import { ITrainingAreasRepository } from "../../repositories/ITrainingAreasRepository";

class UpdateTrainingAreaUseCase {
  constructor(private trainingAreasRepository: ITrainingAreasRepository) { }

  async execute({ id, nome, descricao, fotoUrl }: ITrainingAreaDTO) {
    const trainingArea = await this.trainingAreasRepository.findById(id);
    if (!trainingArea) {
      throw new RequestError("Área de formação não encontrada!", 404);
    }

    return await this.trainingAreasRepository.update({ nome, descricao, id, fotoUrl });
  }
}

export { UpdateTrainingAreaUseCase };