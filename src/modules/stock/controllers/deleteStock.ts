import { StockRepository } from "../repository/implement/StockRepository";
import { DeleteStockUseCase } from "../useCases/DeleteStockUseCase";
import { DeleteStockController } from "./DeleteStockController";

const stockRepository = new StockRepository();
const deleteStockUseCase = new DeleteStockUseCase(stockRepository);
const deleteStockController = new DeleteStockController(deleteStockUseCase);

export { deleteStockController };
