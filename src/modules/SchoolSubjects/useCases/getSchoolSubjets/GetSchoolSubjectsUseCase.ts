import { ISchoolSubjectRepository } from "../../repositories/ISchoolSubjectRepository";

class GetSchoolSubjectsUseCase {
  constructor(private schoolSubjectRepository: ISchoolSubjectRepository) {}

  async execute() {
    return await this.schoolSubjectRepository.list();
  }
}

export { GetSchoolSubjectsUseCase };