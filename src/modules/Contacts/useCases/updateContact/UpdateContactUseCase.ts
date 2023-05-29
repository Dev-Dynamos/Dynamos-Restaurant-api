import { RequestError } from "../../../../typeErrors/error-api";
import { IContactDTO } from "../../dtos/ContactDTO";
import { IContactRepository } from "../../repositories/IContactRepository";


class UpdateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute({ id, numeroTelefone, email }: IContactDTO) {
    const contact = await this.contactRepository.findById(id);

    if(!contact) {
      throw new RequestError("Contacto não encontrado!", 404);
    }

    return await this.contactRepository.update({ id, numeroTelefone, email });  
  }
}

export { UpdateContactUseCase };