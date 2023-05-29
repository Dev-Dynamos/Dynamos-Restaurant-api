import { RequestError } from "../../../../typeErrors/error-api";
import { ICandidateRepository } from "../../repositories/ICandidateRepository";

class GetCandidateUseCase {
    constructor(private candidateRepository: ICandidateRepository) {}

    async execute(id: string) {
        const candidate = await this.candidateRepository.findById(id);

        if(!candidate) {
            throw new RequestError("Candidato não encontrado!", 404);
        }

        return candidate;
    }
}

export { GetCandidateUseCase };