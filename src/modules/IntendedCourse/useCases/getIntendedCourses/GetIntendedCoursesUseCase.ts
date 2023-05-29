import { CursoPretendido } from "@prisma/client";
import { IIntendedCourseRepository } from "../../repositories/IIntendedCourseRepository";

type GetIntendedCoursesResponse = Promise<CursoPretendido[]>

class GetIntendedCoursesUseCase {
    constructor(private intendedCourseRepository: IIntendedCourseRepository) {}

    async execute(): GetIntendedCoursesResponse {
        return await this.intendedCourseRepository.list();
    }
}

export { GetIntendedCoursesUseCase }