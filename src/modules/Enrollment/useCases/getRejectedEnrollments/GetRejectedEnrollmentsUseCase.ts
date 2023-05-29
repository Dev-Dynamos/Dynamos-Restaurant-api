import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository";
import { GetEnrollmentsResponse } from "../getEnrollments/GetEnrollmentsUseCase";


class GetRejectedEnrollmentsUseCase {
    constructor(private enrollmentRepository: EnrollmentRepository) {}

    async execute(): GetEnrollmentsResponse {
        return await this.enrollmentRepository.listRejectedEnrollments();
    }
}

export { GetRejectedEnrollmentsUseCase }