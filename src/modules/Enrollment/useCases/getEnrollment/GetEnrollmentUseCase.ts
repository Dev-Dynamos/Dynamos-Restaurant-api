import { RequestError } from "../../../../typeErrors/error-api";
import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository";
import { EnrollmentResponse } from "../createEnrollment/CreateEnrollmentUseCase";

interface IRequest {
    id: string;
}

class GetEnrollmentUseCase {
    constructor(private enrollmentRepository: EnrollmentRepository) {}

    async execute({ id }: IRequest): EnrollmentResponse {
        const enrollmentExists = await this.enrollmentRepository.findById(id);

        if(!enrollmentExists) {
            throw new RequestError("Inscrição nã encontrada!", 404);
        }

        return await this.enrollmentRepository.findById(id);
    }
}

export { GetEnrollmentUseCase }