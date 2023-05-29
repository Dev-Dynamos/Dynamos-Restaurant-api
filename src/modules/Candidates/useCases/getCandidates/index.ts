import { CandidateRepository } from "../../repositories/implementations/CandidateRepository";
import { GetCandidatesController } from "./GetCandidatesController";
import { GetCandidatesUseCase } from "./GetCandidatesUseCase";

const candidateRepository = new CandidateRepository();
const getCandidatesUseCase = new GetCandidatesUseCase(candidateRepository);
const getCandidatesController = new GetCandidatesController(getCandidatesUseCase);

export { getCandidatesController };