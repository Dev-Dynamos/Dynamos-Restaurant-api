import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";
import { DeleteHistoryUseCase } from "./deleteHistoryUseCase";
import { DeleteHistoryController } from "./deleteHistoryController";

const historyRepository = new HistoryRepository()
const deleteHistoryUseCase = new DeleteHistoryUseCase(historyRepository)
const deleteHistoryController = new DeleteHistoryController(deleteHistoryUseCase)

export { deleteHistoryController }