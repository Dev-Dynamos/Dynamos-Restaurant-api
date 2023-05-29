import { prisma } from "../../../../../prisma/client";
import { Curso, CursoPretendido, Escola } from "@prisma/client";
import { ISchoolStatisticRepository } from "../ISchoolStatisticRepository";

export interface IStatistic {
    "totalInscritos": number,
    "totalInscritosAceites": number,
    "totalInscritosRejeitados": number,
    "totalRapazesInscritos": number,
    "totalMeninasInscritas": number,
    "totalRapazesAceites": number,
    "totalMeninasAceites": number,
    "totalRapazesRejeitados": number,
    "totalMeninasRejeitadas": number,
    "incritosPorCurso": object[],
    "cursoMaisPretendido": object
}

interface IEnrollmentByCourse {
    "cursoId": string;
    "total": number;
    "rapazes": number;
    "meninas": number;
}

class SchoolStatisticRepository implements ISchoolStatisticRepository {
    async findSchoolById(id: string): Promise<Escola> {
        const school = await prisma.escola.findUnique({
            where: {
                id
            }
        });

        return school;
    }

    async getStatistic(schoolId: string): Promise<IStatistic> {
        const totalEnrollments = await this.getTotalEnrollments(schoolId);
        const totalAccepted = await this.getTotalAccepted(schoolId);
        const totalRejected = await this.getTotalRejected(schoolId);
        const totalGirlsEnrolled = await this.getTotalGirlsEnrolled(schoolId); 
        const totalBoysEnrolled = await this.getTotalBoysEnrolled(schoolId);
        const totalGirlsAccepted = await this.getTotalGirlsAccepted(schoolId);
        const totalBoysAccepted = await this.getTotalBoysAccepted(schoolId);
        const totalGirlsRejected = await this.getTotalGirlsRejected(schoolId);
        const totalBoysRejected = await this.getTotalBoysRejected(schoolId);
        const enrollmentsByCourse = await this.getEnrollmentsByCourse(schoolId);
        const mostIntendedCourse = await this.getMostIntendedCourse(schoolId);

        const mostIntendedCourseResponse = {
            "id": mostIntendedCourse.id,
            "areaDeFormacaoId": mostIntendedCourse.areaDeFormacaoId,
            "totalInscricoes": await this.getTotalEnrollmentsFromMostIntendedCourse(mostIntendedCourse, enrollmentsByCourse)
        }
        
        const statistic: IStatistic = {
            "totalInscritos": totalEnrollments,
            "totalInscritosAceites": totalAccepted,
            "totalInscritosRejeitados": totalRejected,
            "totalRapazesInscritos": totalBoysEnrolled,
            "totalMeninasInscritas": totalGirlsEnrolled,
            "totalRapazesAceites": totalBoysAccepted,
            "totalMeninasAceites": totalGirlsAccepted,
            "totalRapazesRejeitados": totalBoysRejected,
            "totalMeninasRejeitadas": totalGirlsRejected,
            "incritosPorCurso": enrollmentsByCourse,
            "cursoMaisPretendido": mostIntendedCourseResponse
        }

        return statistic;
    }

    async getTotalEnrollments(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId
            }
        });
    }

    async getTotalAccepted(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                estado: "ACEITE"
            }
        });
    }

    async getTotalRejected(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                estado: "REJEITADO"
            },
        });
    }

    async getTotalGirlsEnrolled(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                Candidato: {
                    sexo: "F"
                }
            }
        });
    }

    async getTotalBoysEnrolled(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                Candidato: {
                    sexo: "M"
                }
            }
        });
    }

    async getTotalGirlsAccepted(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                estado: "ACEITE",
                Candidato: {
                    sexo: "F"
                }
            }
        });
    }

    async getTotalBoysAccepted(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                estado: "ACEITE",
                Candidato: {
                    sexo: "M"
                }
            }
        });
    }

    async getTotalGirlsRejected(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                estado: "REJEITADO",
                Candidato: {
                    sexo: "F"
                }
            }
        });
    }

    async getTotalBoysRejected(schoolId: string): Promise<number> {
        return await prisma.inscricao.count({
            where: {
                escolaId: schoolId,
                estado: "REJEITADO",
                Candidato: {
                    sexo: "M"
                }
            }
        });
    }

    async getEnrollmentsByCourse(schoolId: string): Promise<IEnrollmentByCourse[]> {
        const intendedEnrollments: IEnrollmentByCourse[] = [];
        const courses = await prisma.curso.findMany({
            where: {
                AreaDeFormacao: {
                    escolaId: schoolId
                }
            }
        });

        
        for(const course of courses) {
            const enrollments = await prisma.cursoPretendido.count({
                where: {
                    cursoId: course.id
                }
            })            

            const boys = await prisma.cursoPretendido.count({
                where: {
                    cursoId: course.id,
                    Inscricao: {
                        Candidato: {
                            sexo: "M"
                        }
                    }
                }
            })

            const girls = await prisma.cursoPretendido.count({
                where: {
                    cursoId: course.id,
                    Inscricao: {
                        Candidato: {
                            sexo: "F"
                        }
                    },
                }
            })

            intendedEnrollments.push(Object.assign({
                'cursoId': course.id,
                'total': enrollments,
                'rapazes': boys,
                'meninas': girls
            }));                
        }

        return intendedEnrollments;
    }

    async getMostIntendedCourse(schoolId: string): Promise<Curso> {
        const enrollmentsByCourse = await this.getEnrollmentsByCourse(schoolId);
        
        const allTotals = enrollmentsByCourse.map((enrollment) => enrollment.total);
        const max = Math.max(...allTotals);

        const mostIntendedCourseId = enrollmentsByCourse.find((enrollment) => enrollment.total === max).cursoId;
        
        const mostIntendedCourse = await prisma.curso.findFirst({
            where: {
                id: mostIntendedCourseId
            }
        })
        
        return mostIntendedCourse;

    }

    async getTotalEnrollmentsFromMostIntendedCourse(mostIntendedCourse: Curso, enrollmentsByCourse: IEnrollmentByCourse[]): Promise<number> {
        const enrollment = enrollmentsByCourse.find((enroll) => enroll.cursoId === mostIntendedCourse.id);
        return enrollment.total;
    }
}

export {  SchoolStatisticRepository }