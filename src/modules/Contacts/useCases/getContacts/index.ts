import { ContactRepository } from "../../repositories/implementations/ContactRepository";
import { GetContactsController } from "./GetContactsController";
import { GetContactsUseCase } from "./GetContactsUseCase";

const contactRepository = new ContactRepository();
const getContactsUseCase = new GetContactsUseCase(contactRepository);
const getContactsController = new GetContactsController(getContactsUseCase);

export { getContactsController };