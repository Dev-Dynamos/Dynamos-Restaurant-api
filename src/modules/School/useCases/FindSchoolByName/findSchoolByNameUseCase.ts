import { RequestError } from "@src//typeErrors/error-api";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

export class FindSchoolByNameUseCase {
  constructor(private schoolRepository: SchoolRepository) { }

  async execute(nome: string, take?: number, skip?: number) {

    const school = await this.schoolRepository.filterSchoolByName(nome, take, skip)

    return school
  }
}