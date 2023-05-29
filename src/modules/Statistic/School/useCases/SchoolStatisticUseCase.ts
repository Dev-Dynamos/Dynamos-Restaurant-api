import { RequestError } from "../../../../typeErrors/error-api";
import { IStatistic, SchoolStatisticRepository } from "../repositories/implementations/SchoolStatisticRepository";

interface IRequest {
    id: string;
}

class SchoolStatisticUseCase {
    constructor(private schoolStatisticRepository: SchoolStatisticRepository) {}
    async execute({ id }: IRequest): Promise<IStatistic> {
        const school = await this.schoolStatisticRepository.findSchoolById(id);

        if(!school) {            
            throw new RequestError("Escola não encontrada!", 404);
        }

        return await this.schoolStatisticRepository.getStatistic(id);
    }
}

export { SchoolStatisticUseCase }