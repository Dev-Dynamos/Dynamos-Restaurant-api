import { RequestError } from "../../../../typeErrors/error-api";
import { ISchoolSubjectRepository } from "../../repositories/ISchoolSubjectRepository";

interface IRequest {
  nome: string;
  descricao: string;
  id: string;
}

class UpdateSchoolSubjectUseCase {
  constructor(private schoolSubjectRepository: ISchoolSubjectRepository) {}

  async execute({nome, descricao, id}: IRequest) {
    const schoolSubject = await this.schoolSubjectRepository.findById(id);
    if(!schoolSubject) {
      throw new RequestError("Disciplina não encontrada!", 404);
    }

    return await this.schoolSubjectRepository.update({ nome, descricao, id });  
  }
}

export { UpdateSchoolSubjectUseCase };