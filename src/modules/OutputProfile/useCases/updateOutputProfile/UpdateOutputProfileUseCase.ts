import { RequestError } from "../../../../typeErrors/error-api";
import { IOutputProfileRepository } from "../../repositories/IOutputProfileRepository";

interface IRequest {
  nome: string;
  descricao: string;
  id: string;
  fotoUrl: string;
}

class UpdateOutputProfileUseCase {
  constructor(private outputProfileRepository: IOutputProfileRepository) { }

  async execute({ nome, descricao, id, fotoUrl }: IRequest) {
    const outputProfile = await this.outputProfileRepository.findById(id);
    if (!outputProfile) {
      throw new RequestError("Perfil de saída não encontrado!", 404);
    }

    return await this.outputProfileRepository.update({ nome, descricao, id, fotoUrl });
  }
}

export { UpdateOutputProfileUseCase };