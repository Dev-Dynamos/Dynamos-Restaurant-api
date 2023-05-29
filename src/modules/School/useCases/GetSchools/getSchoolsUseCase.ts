import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

export class GetSchoolsUseCase {
  constructor(private schoolRepository: SchoolRepository){}

  async execute(){
    const schools = await this.schoolRepository.getSchools()

    return schools
  }
}