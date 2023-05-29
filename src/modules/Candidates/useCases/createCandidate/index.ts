import { ContactRepository } from "../../../../modules/Contacts/repositories/implementations/ContactRepository";
import { CandidateRepository } from "../../repositories/implementations/CandidateRepository";
import { CreateCandidateController } from "./CreateCandidateController";
import { CreateCandidateUseCase } from "./CreateCandidateUseCase";

const candidateRepository = new CandidateRepository();
const contactRepository = new ContactRepository();
const createCandidateUseCase = new CreateCandidateUseCase(candidateRepository, contactRepository);
const createCandidateController = new CreateCandidateController(createCandidateUseCase);

export { createCandidateController };