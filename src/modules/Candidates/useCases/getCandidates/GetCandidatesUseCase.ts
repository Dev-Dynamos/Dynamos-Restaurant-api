import { ICandidateRepository } from "../../repositories/ICandidateRepository";

class GetCandidatesUseCase {
    constructor(private candidateRepository: ICandidateRepository) {}

    async execute() {
       return await this.candidateRepository.list();
    }
}

export { GetCandidatesUseCase };