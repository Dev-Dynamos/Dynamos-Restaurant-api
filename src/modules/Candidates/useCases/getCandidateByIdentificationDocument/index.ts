import { CandidateRepository } from "../../repositories/implementations/CandidateRepository";
import { GetCandidateByIdentificationDocumentUseCase } from "./GetCandidateByIdentificationDocumentUseCase";
import { GetCandidateByIdentificationDocumentController } from "./GetCandidateByIdentificationDocumentController";

const candidateRepository = new CandidateRepository();
const getCandidateByIdentificationDocumentUseCase = new GetCandidateByIdentificationDocumentUseCase(candidateRepository);
const getCandidateByIdentificationDocumentController = new GetCandidateByIdentificationDocumentController(getCandidateByIdentificationDocumentUseCase);

export { getCandidateByIdentificationDocumentController };