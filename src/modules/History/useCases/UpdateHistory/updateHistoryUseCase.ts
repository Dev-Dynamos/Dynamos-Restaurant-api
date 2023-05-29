import { RequestError } from "../../../../typeErrors/error-api";
import { HistoryDTO } from "../../dtos";
import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";

export class UpdateHistoryUseCase {
  constructor(private historyRepository: HistoryRepository) { }

  async execute({ id, descricao, fundador, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 }: HistoryDTO) {
    const historyExists = await this.historyRepository.findById(id)

    if (!historyExists) throw new RequestError("Historial não encontrado.", 404)

    const updatedHistory = await this.historyRepository.update({ id, descricao, fundador, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 })
    return updatedHistory
  }
}