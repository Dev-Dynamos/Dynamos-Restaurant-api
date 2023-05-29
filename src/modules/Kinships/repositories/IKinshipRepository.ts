import { Candidato, Contato, Parentesco } from "@prisma/client";
import { IKinshipDTO } from "../dtos/CreateKinshipDTO";

export interface IKinshipRepository {
    create({ nome, designacao, contatoId, candidatoId }: IKinshipDTO): Promise<Parentesco>
    findById(id: string): Promise<Parentesco>
    findIfAlreadyExists(candidatoId: string): Promise<Parentesco>
    findContactById(contactId: string): Promise<Contato>
    findCandidateById(candidateId: string): Promise<Candidato>
    delete(id: string): Promise<Parentesco>
    list(): Promise<Parentesco[]>
}