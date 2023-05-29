import { RequestError } from "../../../../typeErrors/error-api";
import { IKinshipRepository } from "../../repositories/IKinshipRepository";

interface IRequest {
  id: string;
}

class GetKinshipUseCase {
  constructor(private kinshipRepository: IKinshipRepository) {}

  async execute({ id }: IRequest) {
    const kinship = await this.kinshipRepository.findById(id);

    if(!kinship) {
      throw new RequestError("Parentesco não encontrado!", 404);
    }

    return kinship;
  }
}

export { GetKinshipUseCase };