import { RequestError } from "../../../../typeErrors/error-api";
import { ISchoolSubjectRepository } from "../../repositories/ISchoolSubjectRepository";

interface IRequest {
  id: string;
}

class GetSchoolSubjectUseCase {
  constructor(private schoolSubjectRepository: ISchoolSubjectRepository) {}

  async execute({ id }: IRequest) {
    const schoolSubject = await this.schoolSubjectRepository.findById(id);

    if(!schoolSubject) {
      throw new RequestError("Disciplina não encontrada!", 404);
    }

    return schoolSubject;
  }
}

export { GetSchoolSubjectUseCase };