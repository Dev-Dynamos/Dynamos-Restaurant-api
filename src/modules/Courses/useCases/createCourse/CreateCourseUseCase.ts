import { SchoolRepository } from "../../../../../src//modules/School/repositories/implementation/SchoolRepository";
import { RequestError } from "../../../../typeErrors/error-api";
import { CourseRepository } from "../../repositories/implementations/CourseRepository";

interface IRequest {
  nome: string;
  descricao: string;
  areaDeFormacaoId: string;
  fotoUrl: string;
}

class CreateCourseUseCase {
  constructor(private courseRepository: CourseRepository, private schoolRepository: SchoolRepository) { }

  async execute({ nome, descricao, areaDeFormacaoId, fotoUrl }: IRequest) {
    const areaDeFormacao = await this.courseRepository.findTrainingAreaById(areaDeFormacaoId);

    if (!areaDeFormacao) {
      throw new RequestError("Área de formação não encontrada.", 404);
    }

    const courseAlreadyExists = await this.courseRepository.findByName(nome);

    if (courseAlreadyExists) {
      throw new RequestError('Curso já existente!', 400);
    }

    return this.courseRepository.create({ nome, descricao, areaDeFormacaoId, fotoUrl });
  }
}

export { CreateCourseUseCase };