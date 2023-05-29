import { Inscricao } from "@prisma/client";
import { CreateEnrollmentDTO } from "../../dtos/CreateEnrollmentDTO";
import { IEnrollmentRepository } from "../../repositories/IEnrollmentRepository";
import { RequestError } from "../../../../typeErrors/error-api";

export type EnrollmentResponse = Promise<Inscricao>;

export class CreateEnrollmentUseCase {
    constructor(private enrollmentRepository: IEnrollmentRepository) { }

    async execute({ escolaId, candidatoId }: CreateEnrollmentDTO): EnrollmentResponse {
        const schoolExists = await this.enrollmentRepository.findSchoolById(escolaId);
        const candidateExists = await this.enrollmentRepository.findCandidateById(candidatoId);
        const candidateSubscriptionAlreadyExists = await this.enrollmentRepository.findIfCandidateIsAlreadySubscribed(escolaId, candidatoId);
        const totalCandidateEnrollments = await this.enrollmentRepository.getCandidateTotalEnrollments(candidatoId);

        if (!schoolExists) {
            throw new RequestError("Escola não encontrada!", 404);
        }

        if (!candidateExists) {
            throw new RequestError("Candidato não encontrado!", 404);
        }

        if (candidateSubscriptionAlreadyExists) {
            throw new RequestError("O candidato já efectuou inscrição nessa escola!", 400);
        }

        if (totalCandidateEnrollments === 2) {
            throw new RequestError("O Candidato já atingiu o limite de inscrições que pode fazer! (No máximo são 2 escolas)", 400);
        }

        return await this.enrollmentRepository.create({ escolaId, candidatoId });
    }
}