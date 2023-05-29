import { AreaDeFormacao } from "@prisma/client";
import { IQueryParams, ITrainingAreasRepository } from "../../repositories/ITrainingAreasRepository";

type FindTrainingAreasUseCaseResponse = Promise<AreaDeFormacao[]>;

class FindTrainingAreasUseCase {
    constructor(private trainingAreasRepository: ITrainingAreasRepository) {}

    async execute({ search, skip, take }: IQueryParams): FindTrainingAreasUseCaseResponse {
        return await this.trainingAreasRepository.find({ search, skip, take });
    }
}

export { FindTrainingAreasUseCase };