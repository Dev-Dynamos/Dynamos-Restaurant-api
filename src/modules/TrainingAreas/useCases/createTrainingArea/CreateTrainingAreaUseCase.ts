import { ITrainingAreasRepository } from "../../repositories/ITrainingAreasRepository";
import { RequestError } from "../../../../typeErrors/error-api";
import { ITrainingAreaDTO } from "../../dtos/TrainingAreaDTO";
import { SchoolRepository } from "../../../../modules/School/repositories/implementation/SchoolRepository";


class CreateTrainingAreaUseCase {
  constructor(private trainingAreasRepository: ITrainingAreasRepository, private schoolRepository: SchoolRepository) { }

  async execute(data: ITrainingAreaDTO) {
    const category = await this.trainingAreasRepository.findCategoryById(data.categoriaId);

    if (data.escolaId) {
      const schoolExists = await this.schoolRepository.findById(data.escolaId);
      if (!schoolExists) {
        throw new RequestError("A escola especificada não foi encontrada.", 404);
      }
    }

    if (!category) {
      throw new RequestError("A categoria especificada não foi encontrada.", 404);
    }

    const trainingAreaAlreadyExists = await this.trainingAreasRepository.findByName(data.nome);

    if (trainingAreaAlreadyExists) {
      throw new RequestError('Área de formação já existente!', 400);
    }

    const trainingArea = await this.trainingAreasRepository.create(data)

    return trainingArea;
  }
}

export { CreateTrainingAreaUseCase };