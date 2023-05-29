import { RequestError } from "../../../../typeErrors/error-api";
import { ICandidateRepository } from "../../repositories/ICandidateRepository";

class DeleteCandidateUseCase {
    constructor(private candidateRepository: ICandidateRepository) {}

    async execute(id: string) {
        const candidate = await this.candidateRepository.findById(id);

        if(!candidate) {
            throw new RequestError("O candidato não existe!", 404);
        }

        return await this.candidateRepository.delete(id);
    } 
}

export { DeleteCandidateUseCase };