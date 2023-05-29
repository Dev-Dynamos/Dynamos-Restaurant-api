import { Candidato, Curso, CursoPretendido, Inscricao } from "@prisma/client";
import { IIntendedCourseDTO } from "../dtos/CreateIntendedCourseDTO";

export interface IIntendedCourseRepository {
    create({ cursoId, inscricaoId }: IIntendedCourseDTO): Promise<CursoPretendido>
    findById(id: string): Promise<CursoPretendido>;
    findEnrollmentById(enrollmentId: string): Promise<Inscricao>
    findCourseById(courseId: string): Promise<Curso>
    findCandidateTotalNumberOfIntendedCourses(enrollmentId: string): Promise<number>
    delete(id: string): Promise<CursoPretendido>;
    list(): Promise<CursoPretendido[]>;
}
