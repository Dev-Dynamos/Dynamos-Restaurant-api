import { RequestError } from "../../../../typeErrors/error-api";
import { IContactRepository } from "../../repositories/IContactRepository";

interface IRequest {
  id: string;
}

class DeleteContactUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute({ id }: IRequest) {
    const contactExists = await this.contactRepository.findById(id);
    if(!contactExists) {
      throw new RequestError("Contato não encontrado!", 404);
    }

    return this.contactRepository.delete(id);
  }
}

export { DeleteContactUseCase };