import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";
import { UpdateHistoryUseCase } from "./updateHistoryUseCase";
import { UpdateHistoryController } from "./updateHistoryController";

const historyRepository = new HistoryRepository()
const updateHistoryUseCase = new UpdateHistoryUseCase(historyRepository)
const updateHistoryController = new UpdateHistoryController(updateHistoryUseCase)

export { updateHistoryController }