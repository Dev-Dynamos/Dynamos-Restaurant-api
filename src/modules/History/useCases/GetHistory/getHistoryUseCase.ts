import { RequestError } from "../../../../typeErrors/error-api";
import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";

export class GetHistoryUseCase {
  constructor(private historyRepository: HistoryRepository){}

  async execute(id: string) {
    const history = await this.historyRepository.findById(id)

    if(!history) throw new RequestError("Historial não encontrado.", 404)

    return history
  }
}