import { Candidato, Contato, Parentesco } from "@prisma/client";
import { IKinshipDTO } from "../../dtos/CreateKinshipDTO";
import { prisma } from "../../../../prisma/client";
import { IKinshipRepository } from "../IKinshipRepository";


class KinshipRepository implements IKinshipRepository {
    async create({ nome, designacao, contatoId, candidatoId }: IKinshipDTO): Promise<Parentesco> {
        const contact = await prisma.parentesco.create({
            data: {
                nome,
                designacao,
                contatoId,
                candidatoId
            }
        });

        return contact;
    }

    async findById(id: string): Promise<Parentesco> {
        return await prisma.parentesco.findUnique({
            where: {
                id
            }
        });
    }

    async findIfAlreadyExists(contatoId: string): Promise<Parentesco> {
        return await prisma.parentesco.findFirst({
            where: {
                contatoId,
            }
        })
    }

    async findContactById(contactId: string): Promise<Contato> {
        return await prisma.contato.findFirst({
            where: {
                id: contactId
            }
        })
    }

    async findCandidateById(candidateId: string): Promise<Candidato> {
        return await prisma.candidato.findFirst({
            where: {
                id: candidateId
            }
        })
    }

    async delete(id: string): Promise<Parentesco> {
        return await prisma.parentesco.delete({
            where: {
                id
            }
        });
    }

    async list(): Promise<Parentesco[]> {
        return await prisma.parentesco.findMany({
            include: {
                Contato: true,
                Candidato: true
            }
        })
    }
}

export { KinshipRepository }