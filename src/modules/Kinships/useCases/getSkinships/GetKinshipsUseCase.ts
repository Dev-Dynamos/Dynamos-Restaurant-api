import { Parentesco } from "@prisma/client";
import { IKinshipRepository } from "../../repositories/IKinshipRepository";

type GetKinshipsResponse = Promise<Parentesco[]>

class GetKinshipsUseCase {
  constructor(private kinShipRepository: IKinshipRepository) {}

  async execute(): GetKinshipsResponse {
    return await this.kinShipRepository.list();
  }
}

export { GetKinshipsUseCase };