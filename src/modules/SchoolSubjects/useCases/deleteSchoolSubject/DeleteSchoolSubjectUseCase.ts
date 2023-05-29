import { RequestError } from "../../../../typeErrors/error-api";
import { ISchoolSubjectRepository } from "../../repositories/ISchoolSubjectRepository";

interface IRequest {
  id: string;
}

class DeleteSchoolSubjectUseCase {
  constructor(private schoolSubjectRepository: ISchoolSubjectRepository) {}

  async execute({ id }: IRequest) {
    const schoolSubjectExists = await this.schoolSubjectRepository.findById(id);
    if(!schoolSubjectExists) {
      throw new RequestError("Disciplina não encontrada!", 404);
    }

    return this.schoolSubjectRepository.delete(id);
  }
}

export { DeleteSchoolSubjectUseCase };