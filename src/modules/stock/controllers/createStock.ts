import { StockRepository } from "../repository/implement/StockRepository";
import { CreateStockUseCase } from "../useCases/CreateStockUseCase";
import { CreateStockController } from "./CreateStockController";

const stockRepository = new StockRepository();
const createStockUseCase = new CreateStockUseCase(stockRepository);
const createStockController = new CreateStockController(createStockUseCase);

export { createStockController };
