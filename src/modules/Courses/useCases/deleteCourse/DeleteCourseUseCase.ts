import { RequestError } from "../../../../typeErrors/error-api";
import { ICourseRepository } from "../../repositories/ICourseRepository";

interface IRequest {
  id: string;
}

class DeleteCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute({ id }: IRequest) {
    const courseExists = await this.courseRepository.findById(id);
    if(!courseExists) {
      throw new RequestError("Curso não encontrado!", 404);
    }

    return this.courseRepository.delete(id);
  }
}

export { DeleteCourseUseCase };