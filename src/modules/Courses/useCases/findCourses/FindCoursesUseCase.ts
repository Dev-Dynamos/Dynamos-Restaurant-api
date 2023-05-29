import { Curso } from "@prisma/client";
import { IQueryParams, ICourseRepository } from "../../repositories/ICourseRepository";

type FindCoursesUseCaseResponse = Promise<Curso[]>;

class FindCoursesUseCase {
    constructor(private courseRepository: ICourseRepository) {}

    async execute({ search, skip, take }: IQueryParams): FindCoursesUseCaseResponse {
        return await this.courseRepository.find({ search, skip, take });
    }
}

export { FindCoursesUseCase };