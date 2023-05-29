import { TipoIdentificacao } from "@prisma/client";
import { RequestError } from "../../../../typeErrors/error-api";
import { ICandidateRepository } from "../../repositories/ICandidateRepository";

interface IRequest {
    code: string;
}

class GetCandidateByIdentificationDocumentUseCase {
    constructor(private candidateRepository: ICandidateRepository) {}

    async execute({ code }: IRequest) {
        const candidate = await this.candidateRepository.findByIdentificationDocument(code);

        if(!candidate) {
            throw new RequestError("Candidato não encontrado!", 404);
        }

        return candidate;
    }
}

export { GetCandidateByIdentificationDocumentUseCase };