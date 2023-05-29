import { Inscricao } from "@prisma/client";
import { RequestError } from "../../../../typeErrors/error-api";
import { IEnrollmentRepository } from "../../repositories/IEnrollmentRepository";
interface IRequest {
    id: string;
    estado: string;
}

type UpdateEnrollmentUseCaseResponse = Promise<Inscricao>

class UpdateEnrollmentUseCase {
    constructor(private enrollmentRepository: IEnrollmentRepository) { }

    async execute({ id, estado }: IRequest): UpdateEnrollmentUseCaseResponse {
        const enrollmentExists = await this.enrollmentRepository.findById(id);

        if (enrollmentExists) {
            throw new RequestError("Inscrição não encontrada!", 404);
        }

        const isValidState = await this.enrollmentRepository.validateState(estado.toUpperCase());
        if(!isValidState) {
            throw new RequestError("Estado inválido", 400);
        }

        return await this.enrollmentRepository.update(id, estado.toUpperCase());
    }
}

export { UpdateEnrollmentUseCase }