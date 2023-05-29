import { RequestError } from "../../../../typeErrors/error-api";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

interface IRequest {
  id: string;
}

export class FindSchoolsByCountyUseCase {
  constructor(private schoolRepository: SchoolRepository) { }

  async execute({ id }: IRequest) {
    const countyExists = await this.schoolRepository.findCountyById(id)

    if (!countyExists) {
      throw new RequestError("Município não encontrado!", 404)
    }

    return await this.schoolRepository.filterSchoolByCounty(id);
  }
}