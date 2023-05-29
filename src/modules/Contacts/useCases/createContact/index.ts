import { CreateContactController } from "./CreateContactController";
import { CreateContactUseCase } from "./CreateContactUseCase";
import { ContactRepository } from "../../repositories/implementations/ContactRepository";

const contactRepository = new ContactRepository();
const createContactUseCase = new CreateContactUseCase(contactRepository);
const createContactController = new CreateContactController(createContactUseCase);

export { createContactController };