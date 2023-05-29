import { RequestError } from "../../../../typeErrors/error-api";
import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";

export class DeleteHistoryUseCase {
  constructor(private historyRepository: HistoryRepository){}

  async execute(id: string) {
    const historyExists = await this.historyRepository.findById(id)

    if(!historyExists) throw new RequestError("Historial não encontrado.", 404)

    const deletedHistory = await this.historyRepository.delete(id)
    return deletedHistory
  }
}