import { RequestError } from "../../../../typeErrors/error-api";
import { IOutputProfileRepository } from "../../repositories/IOutputProfileRepository";

interface IRequest {
  id: string;
}

class GetOutputProfileUseCase {
  constructor(private outputProfilesRepository: IOutputProfileRepository) {}

  async execute({ id }: IRequest) {
    const outputProfile = await this.outputProfilesRepository.findById(id);

    if(!outputProfile) {
      throw new RequestError("Perfil de saída não encontrado!", 404);
    }

    return outputProfile;
  }
}

export { GetOutputProfileUseCase };