import { RequestError } from "../../../../typeErrors/error-api";
import { ICourseRepository } from "../../repositories/ICourseRepository";

interface IRequest {
  id: string;
}

class GetCourseUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute({ id }: IRequest) {
    const course = await this.courseRepository.findById(id);

    if(!course) {
      throw new RequestError("Curso não encontrado!", 404);
    }

    return course;
  }
}

export { GetCourseUseCase };