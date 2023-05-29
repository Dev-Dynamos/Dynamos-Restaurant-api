import { CandidateRepository } from "../../repositories/implementations/CandidateRepository";
import { DeleteCandidateController } from "./DeleteCandidateController";
import { DeleteCandidateUseCase } from "./DeleteCandidateUseCase";


const candidateRepository = new CandidateRepository();
const deleteCandidateUseCase = new DeleteCandidateUseCase(candidateRepository);
const deleteCandidateController = new DeleteCandidateController(deleteCandidateUseCase);

export { deleteCandidateController };