import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";
import { CreateHistoryUseCase } from "./createHistoryUseCase";
import { CreateHistoryController } from "./createHistoryController";

const historyRepository = new HistoryRepository()
const createHistoryUseCase = new CreateHistoryUseCase(historyRepository)
const createHistoryController = new CreateHistoryController(createHistoryUseCase)

export { createHistoryController }