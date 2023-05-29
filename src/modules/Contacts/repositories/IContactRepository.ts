import { Contato } from "@prisma/client";
import { IContactDTO } from "../dtos/ContactDTO";

export interface IContactRepository {
    create({ numeroTelefone, email }: IContactDTO): Promise<Contato>
    findById(id: string): Promise<Contato>;
    findByPhoneNumber(phoneNumber: string): Promise<Contato>
    findByEmail(email: string): Promise<Contato>;
    isContactAlreadyLindedToSomeone(contactId: string): Promise<boolean>
    update({ id, numeroTelefone, email }: IContactDTO): Promise<Contato>;
    delete(id: string): Promise<Contato>;
    list(): Promise<Contato[]>;
}
