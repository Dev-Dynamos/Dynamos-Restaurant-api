import { RequestError } from "../../../../typeErrors/error-api";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

interface IRequest {
  id: string;
}

export class FindSchoolsByProvinceUseCase {
  constructor(private schoolRepository: SchoolRepository) { }

  async execute({ id }: IRequest) {
    const provinceExists = await this.schoolRepository.findProvinceById(id)

    if (!provinceExists) {
      throw new RequestError("Província não encontrada!", 404)
    }

    const school = await this.schoolRepository.filterSchoolByProvince(id)

    return school
  }
}