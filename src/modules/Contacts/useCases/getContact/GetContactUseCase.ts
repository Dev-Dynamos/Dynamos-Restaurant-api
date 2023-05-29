import { RequestError } from "../../../../typeErrors/error-api";
import { IContactRepository } from "../../repositories/IContactRepository";

interface IRequest {
  id: string;
}

class GetContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute({ id }: IRequest) {
    const contact = await this.contactRepository.findById(id);

    if(!contact) {
      throw new RequestError("Contato não encontrado!", 404);
    }

    return contact;
  }
}

export { GetContactUseCase };