import { Candidato, Escola, EstadoInscricao, Inscricao } from "@prisma/client";
import { CreateEnrollmentDTO } from "../dtos/CreateEnrollmentDTO";


export interface IEnrollmentRepository {
    create({ escolaId, candidatoId }: CreateEnrollmentDTO): Promise<Inscricao>;
    findById(id: string): Promise<Inscricao>;
    findSchoolById(schoolId: string): Promise<Escola>
    findCandidateById(candidateId: string): Promise<Candidato>;
    findIfCandidateIsAlreadySubscribed(schoolId: string, candidateId: string): Promise<Inscricao>;
    getCandidateTotalEnrollments(candidateId: string): Promise<number>;
    update(id: string, state: string): Promise<Inscricao>
    validateState(state: string): Promise<boolean>;
    delete(id: string): Promise<Inscricao>;
    list(): Promise<Inscricao[]>;
    listPendingEnrollments(): Promise<Inscricao[]>;
    listAcceptedEnrollments(): Promise<Inscricao[]>;
    listRejectedEnrollments(): Promise<Inscricao[]>;
}