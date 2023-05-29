import { CandidateRepository } from "../../repositories/implementations/CandidateRepository";
import { GetCandidateController } from "./GetCandidateController";
import { GetCandidateUseCase } from "./GetCandidateUseCase";

const candidateRepository = new CandidateRepository();
const getCandidateUseCase = new GetCandidateUseCase(candidateRepository);
const getCandidateController = new GetCandidateController(getCandidateUseCase);

export { getCandidateController };