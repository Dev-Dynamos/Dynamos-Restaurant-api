import { CursoPretendido } from "@prisma/client";
import { RequestError } from "../../../../typeErrors/error-api";
import { IIntendedCourseDTO } from "../../dtos/CreateIntendedCourseDTO";
import { IIntendedCourseRepository } from "../../repositories/IIntendedCourseRepository";

export type IntendedCourseResponse = Promise<CursoPretendido>;

export class CreateIntendedCourseUseCase {
    constructor(private intendedCourseRepository: IIntendedCourseRepository) {}
    
    async execute({ cursoId, inscricaoId }: IIntendedCourseDTO): IntendedCourseResponse {
        const enrollmentExists = await this.intendedCourseRepository.findEnrollmentById(inscricaoId);
        const courseExists = await this.intendedCourseRepository.findCourseById(cursoId);
        

        if(!enrollmentExists) {
            throw new RequestError("Inscrição não encontrada!", 404);
        }

        if(!courseExists) {
            throw new RequestError("Curso não encontrado!", 404);
        }

        const candidateTotalNumberOfIntendedCourses = await this.intendedCourseRepository.findCandidateTotalNumberOfIntendedCourses(inscricaoId);
        if(candidateTotalNumberOfIntendedCourses === 2) {
            throw new RequestError("Apenas pode escolher dois cursos no máximo!");
        }

        return await this.intendedCourseRepository.create({ cursoId, inscricaoId });
    }
}