import { Candidato, Escola, EstadoInscricao, Inscricao } from "@prisma/client";
import { CreateEnrollmentDTO } from "../../dtos/CreateEnrollmentDTO";
import { IEnrollmentRepository } from "../IEnrollmentRepository";
import { prisma } from "../../../../prisma/client";


export class EnrollmentRepository implements IEnrollmentRepository {

    async create({ escolaId, candidatoId }: CreateEnrollmentDTO): Promise<Inscricao> {
        const inscricao = await prisma.inscricao.create({
            data: {
                escolaId,
                candidatoId
            }
        });

        return inscricao;
    }

    async findById(id: string): Promise<Inscricao> {
        return await prisma.inscricao.findUnique({
            where: {
                id
            },
            include: {
                Escola: true,
                Candidato: true,
            }
        });
    }

    async findSchoolById(schoolId: string): Promise<Escola> {
        return await prisma.escola.findFirst({
            where: {
                id: schoolId
            }
        });
    }


    async findCandidateById(candidateId: string): Promise<Candidato> {
        return await prisma.candidato.findFirst({
            where: {
                id: candidateId
            }
        });
    }
    async findIfCandidateIsAlreadySubscribed(schoolId: string, candidateId: string): Promise<Inscricao> {
        return await prisma.inscricao.findFirst({
            where: {
                escolaId: schoolId,
                candidatoId: candidateId
            }
        })
    }

    async getCandidateTotalEnrollments(candidateId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                candidatoId: candidateId
            }
        })
    }

    async update(id: string, state: EstadoInscricao): Promise<Inscricao> {
        return await prisma.inscricao.update({
            where: {
                id
            },
            data: {
                estado: state
            }
        })
    }

    async validateState(state: string): Promise<boolean> {
        if((state !== EstadoInscricao.ACEITE) && (state !== EstadoInscricao.PENDENTE) && (state!== EstadoInscricao.REJEITADO)) {
            return false;
        }
    
        return true;
      }

    async delete(id: string): Promise<Inscricao> {
        return await prisma.inscricao.delete({
            where: {
                id
            },
            include: {
                Escola: true,
                Candidato: true,
            }
        })
    }

    async list(): Promise<Inscricao[]> {
        return await prisma.inscricao.findMany({
            include: {
                Escola: true,
                Candidato: true,
            }
        });
    }

    async listPendingEnrollments(): Promise<Inscricao[]> {
        return await prisma.inscricao.findMany({
            where: {
                estado: "PENDENTE"
            },
            include: {
                Escola: true,
                Candidato: true,
            }
        })
    }

    async listAcceptedEnrollments(): Promise<Inscricao[]> {
        return await prisma.inscricao.findMany({
            where: {
                estado: "ACEITE"
            },
            include: {
                Escola: true,
                Candidato: true,
            }
        })
    }

    async listRejectedEnrollments(): Promise<Inscricao[]> {
        return await prisma.inscricao.findMany({
            where: {
                estado: "REJEITADO"
            },
            include: {
                Escola: true,
                Candidato: true,
            }
        })
    }

}