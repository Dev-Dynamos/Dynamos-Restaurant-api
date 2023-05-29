import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { UpdateContactController } from "./UpdateContactController";
import { UpdateContactUseCase } from "./UpdateContactUseCase";


const contactRepository = new ContactRepository();
const updateContactUseCase = new UpdateContactUseCase(contactRepository);
const updateContactController = new UpdateContactController(updateContactUseCase);

export { updateContactController };