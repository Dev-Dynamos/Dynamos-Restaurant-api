import { RequestError } from "../../../../typeErrors/error-api";
import { HistoryDTO } from "../../dtos";
import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";

export class CreateHistoryUseCase {
  constructor(private historyRepository: HistoryRepository) { }

  async execute({ descricao, fundador, escolaId, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 }: HistoryDTO) {
    const schoolExists = await this.historyRepository.findSchoolById(escolaId)

    if (!schoolExists) throw new RequestError("Escola não encontrada.", 404)

    const schoolAlreadyHasHistory = await this.historyRepository.findBySchoolId(escolaId)

    if (schoolAlreadyHasHistory) throw new RequestError("Escola já tem historial", 400)

    const newHistory = await this.historyRepository.save({ descricao, fundador, escolaId, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 })
    return newHistory
  }
}