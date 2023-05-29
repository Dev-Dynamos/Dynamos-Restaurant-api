import { Candidato, Contato, Curso, CursoPretendido, Inscricao } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { IIntendedCourseDTO } from "../../dtos/CreateIntendedCourseDTO";
import { IIntendedCourseRepository } from "../IIntendedCourseRepository";

class IntendedCourseRepository implements IIntendedCourseRepository {
    async create({ cursoId, inscricaoId }: IIntendedCourseDTO): Promise<CursoPretendido> {
        return await prisma.cursoPretendido.create({
            data: {
                cursoId: cursoId,
                inscricaoId: inscricaoId
            }
        });
    }

    async findById(id: string): Promise<CursoPretendido> {
        return await prisma.cursoPretendido.findUnique({
            where: {
                id
            },
            include: {
                Curso: true,
                Inscricao: true
            }
        });
    }

    async findEnrollmentById(inscricaoId: string): Promise<Inscricao> {
        return await prisma.inscricao.findFirst({
            where: {
                id: inscricaoId
            }
        });
    }

    async findCourseById(courseId: string): Promise<Curso> {
        return await prisma.curso.findUnique({
            where: {
                id: courseId
            }
        });
    }

    async findCandidateTotalNumberOfIntendedCourses(enrollmentId: string): Promise<number> {
        return await prisma.cursoPretendido.count({
            where: {
                inscricaoId: enrollmentId
            }
        })
    }

    async delete(id: string): Promise<CursoPretendido> {
        return await prisma.cursoPretendido.delete({
            where: {
                id
            },
            include: {
                Curso: true,
                Inscricao: true
            }
        });
    }

    async list(): Promise<CursoPretendido[]> {
        return await prisma.cursoPretendido.findMany({
            include: {
                Curso: true,
                Inscricao: true,
            }
        })
    }
}

export { IntendedCourseRepository };