import { RequestError } from "../../../../typeErrors/error-api";
import { IOutputProfileRepository } from "../../repositories/IOutputProfileRepository";

interface IRequest {
  id: string;
}



class DeleteOutputProfileUseCase {
  constructor(private outputProfileRepository: IOutputProfileRepository) {}

  async execute({ id }: IRequest) {
    const outputProfileExists = await this.outputProfileRepository.findById(id);
    if(!outputProfileExists) {
      throw new RequestError("Perfil de saída não encontrado!", 404);
    }

    return this.outputProfileRepository.delete(id);
  }
}

export { DeleteOutputProfileUseCase };