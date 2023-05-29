import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { GetContactController } from "./GetContactController";
import { GetContactUseCase } from "./GetContactUseCase";

const contactRepository = new ContactRepository();
const getContactUseCase = new GetContactUseCase(contactRepository);
const getContactController = new GetContactController(getContactUseCase);

export { getContactController };