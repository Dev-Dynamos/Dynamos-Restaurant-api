import { Inscricao } from "@prisma/client";
import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository";

export type GetEnrollmentsResponse = Promise<Inscricao[]>

class GetEnrollmentsUseCase {
    constructor(private enrollmentRepository: EnrollmentRepository) {}

    async execute(): GetEnrollmentsResponse {
        return await this.enrollmentRepository.list();
    }
}

export { GetEnrollmentsUseCase }