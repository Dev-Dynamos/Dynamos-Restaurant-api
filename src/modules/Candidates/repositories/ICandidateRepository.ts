import { Candidato, TipoIdentificacao } from "@prisma/client";
import { ICandidateDTO } from "../dtos/CreateCandidateDTO";

export interface ICandidateRepository {
    create(data: ICandidateDTO): Promise<Candidato>;
    findById(id: string): Promise<Candidato>;
    validateSex(sex: string): Promise<boolean>;
    validateIdentificationType(identificationType: string): Promise<boolean>;
    validateSchoolCertificationType(schoolCertifType: string): Promise<boolean>;
    findByIdentificationDocument(code: string): Promise<Candidato>;
    findCandidateByContactId(contactId: string): Promise<Candidato>;
    delete(id: string): Promise<Candidato>;
    list(): Promise<Candidato[]>;
}