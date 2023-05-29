import { IContactRepository } from "../../repositories/IContactRepository";

class GetContactsUseCase {
  constructor(private contactRepository: IContactRepository) {}

  async execute() {
    return await this.contactRepository.list();
  }
}

export { GetContactsUseCase };