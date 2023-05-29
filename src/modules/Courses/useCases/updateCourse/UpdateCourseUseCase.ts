import { RequestError } from "../../../../typeErrors/error-api";
import { ICourseRepository } from "../../repositories/ICourseRepository";

interface IRequest {
  nome: string;
  descricao: string;
  id: string;
  fotoUrl: string;
}

class UpdateCourseUseCase {
  constructor(private courseRepository: ICourseRepository) { }

  async execute({ nome, descricao, id, fotoUrl }: IRequest) {
    const course = await this.courseRepository.findById(id);
    if (!course) {
      throw new RequestError("Curso não encontrado!", 404);
    }

    return await this.courseRepository.update({ nome, descricao, id, fotoUrl });
  }
}

export { UpdateCourseUseCase };