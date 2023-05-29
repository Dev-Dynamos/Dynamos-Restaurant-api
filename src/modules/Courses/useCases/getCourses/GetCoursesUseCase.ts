import { ICourseRepository } from "../../repositories/ICourseRepository";

class GetCoursesUseCase {
  constructor(private courseRepository: ICourseRepository) {}

  async execute() {
    return await this.courseRepository.list();
  }
}

export { GetCoursesUseCase };