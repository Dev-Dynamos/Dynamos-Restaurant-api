import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository";
import { GetEnrollmentsResponse } from "../getEnrollments/GetEnrollmentsUseCase";


class GetAcceptedEnrollmentsUseCase {
    constructor(private enrollmentRepository: EnrollmentRepository) {}

    async execute(): GetEnrollmentsResponse {
        return await this.enrollmentRepository.listAcceptedEnrollments();
    }
}

export { GetAcceptedEnrollmentsUseCase }