import { RequestError } from "../../../../typeErrors/error-api";
import { IIntendedCourseRepository } from "../../repositories/IIntendedCourseRepository";
import { IntendedCourseResponse } from "../createIntendedCourse/CreateIntendedCourseUseCase";

interface IRequest {
    id: string;
}

class DeleteIntendedCourseUseCase {
    constructor(private intendedCourseRepository: IIntendedCourseRepository) {}

    async execute({ id }: IRequest): IntendedCourseResponse {
        const intendedCourseExists = await this.intendedCourseRepository.findById(id);

        if(!intendedCourseExists) {
            throw new RequestError("Opção de curso não encontrado!", 404);
        }

        return await this.intendedCourseRepository.delete(id);
    }
}

export { DeleteIntendedCourseUseCase }