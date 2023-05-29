import { RequestError } from "../../../../typeErrors/error-api";
import { IOutputProfileRepository } from "../../repositories/IOutputProfileRepository";

interface IRequest {
  nome: string;
  descricao: string;
  areaDeFormacaoId: string;
  fotoUrl?: string;
}

class CreateOutputProfileUseCase {
  constructor(private outputProfileRepository: IOutputProfileRepository) { }

  async execute({ nome, descricao, areaDeFormacaoId, fotoUrl }: IRequest) {
    const areaDeFormacao = await this.outputProfileRepository.findTrainingAreaById(areaDeFormacaoId);

    if (!areaDeFormacao) {
      throw new RequestError("A área de formação especificada não foi encontrada.", 404);
    }

    const outputProfileAlreadyExists = await this.outputProfileRepository.findByName(nome);

    if (outputProfileAlreadyExists) {
      throw new RequestError('Perfil de saída já existente!', 400);
    }

    return this.outputProfileRepository.create({ nome, descricao, areaDeFormacaoId, fotoUrl });
  }
}

export { CreateOutputProfileUseCase };