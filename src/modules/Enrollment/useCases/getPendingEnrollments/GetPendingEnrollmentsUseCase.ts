import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository";
import { GetEnrollmentsResponse } from "../getEnrollments/GetEnrollmentsUseCase";

class GetPendingEnrollmentsUseCase {
    constructor(private enrollmentRepository: EnrollmentRepository) {}

    async execute(): GetEnrollmentsResponse {
        return await this.enrollmentRepository.listPendingEnrollments();
    }
}

export { GetPendingEnrollmentsUseCase }