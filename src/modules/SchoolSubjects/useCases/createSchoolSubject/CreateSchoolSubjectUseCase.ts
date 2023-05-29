import * as yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";
import { ISchoolSubjectRepository } from "../../repositories/ISchoolSubjectRepository";

interface IRequest {
  nome: string;
  descricao: string;
  cursoId: string;
}

class CreateSchoolSubjectUseCase {
  constructor(private schoolSubjectRepository: ISchoolSubjectRepository) {}

  async execute({ nome, descricao, cursoId }: IRequest) {
    const schoolSubjectAlreadyExists = await this.schoolSubjectRepository.findByName(nome);

    if(cursoId){
      const course = await this.schoolSubjectRepository.findCourseById(cursoId);
      if(!course) throw new RequestError("curso não encontrado", 404)
    } 

    if(schoolSubjectAlreadyExists) {
      throw new RequestError("Essa Disciplina já existe nesse curso!");
    }

    const schoolSubject = await this.schoolSubjectRepository.create({ nome, descricao, cursoId });
    return schoolSubject;
  }
}

export { CreateSchoolSubjectUseCase };