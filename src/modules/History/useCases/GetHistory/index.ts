import { HistoryRepository } from "../../repositories/implementation/HistoryRepository";
import { GetHistoryUseCase } from "./getHistoryUseCase";
import { GetHistoryController } from "./getHistoryController";

const historyRepository = new HistoryRepository()
const getHistoryUseCase = new GetHistoryUseCase(historyRepository)
const getHistoryController = new GetHistoryController(getHistoryUseCase)

export { getHistoryController }