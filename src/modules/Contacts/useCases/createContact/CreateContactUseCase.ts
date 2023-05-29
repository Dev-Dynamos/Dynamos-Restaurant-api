import { RequestError } from "../../../../typeErrors/error-api";
import { IContactDTO } from "../../dtos/ContactDTO";
import { IContactRepository } from "../../repositories/IContactRepository";

class CreateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}
  
  async execute({ numeroTelefone, email }: IContactDTO) {

    const phoneAlreadyExists = await this.contactRepository.findByPhoneNumber(numeroTelefone);

    if(phoneAlreadyExists) {
      throw new RequestError("Já existe um contacto com esse número de telemóvel!", 400);
    }

    const emailAlreadyExists = await this.contactRepository.findByEmail(email);

    if(emailAlreadyExists) {
      throw new RequestError("Já existe um contacto com esse email!", 400);
    }

    return this.contactRepository.create({ numeroTelefone, email });
  }
}

export { CreateContactUseCase };