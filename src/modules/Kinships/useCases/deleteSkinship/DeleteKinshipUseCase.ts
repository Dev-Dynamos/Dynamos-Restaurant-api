import { RequestError } from "../../../../typeErrors/error-api";
import { IKinshipRepository } from "../../repositories/IKinshipRepository";

interface IRequest {
  id: string;
}

class DeleteKinshipUseCase {
  constructor(private kinshipRepository: IKinshipRepository) {}

  async execute({ id }: IRequest) {
    const skinshipExists = await this.kinshipRepository.findById(id);
    if(!skinshipExists) {
      throw new RequestError("Parentesco não encontrado!", 404);
    }

    return this.kinshipRepository.delete(id);
  }
}

export { DeleteKinshipUseCase };