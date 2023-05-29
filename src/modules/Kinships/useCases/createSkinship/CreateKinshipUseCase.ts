import { RequestError } from "../../../../typeErrors/error-api";
import { IKinshipDTO } from "../../dtos/CreateKinshipDTO";
import { IKinshipRepository } from "../../repositories/IKinshipRepository";

class CreateKinshipUseCase {
  constructor(private kinShipRepository: IKinshipRepository) { }

  async execute({ nome, designacao, contatoId, candidatoId }: IKinshipDTO) {
    const contactExists = await this.kinShipRepository.findContactById(contatoId);
    const candidateExists = await this.kinShipRepository.findCandidateById(candidatoId);
    const kinShipAlreadyExists = await this.kinShipRepository.findIfAlreadyExists(contatoId);

    if (!contactExists) {
      throw new RequestError("Contato não encontrado!", 404);
    }

    if (!candidateExists) {
      throw new RequestError("Candidato não encontrado!", 404);
    }

    if (kinShipAlreadyExists) {
      throw new RequestError("Parentesco já existente", 400);
    }

    return this.kinShipRepository.create({ nome, designacao, contatoId, candidatoId });
  }
}

export { CreateKinshipUseCase };