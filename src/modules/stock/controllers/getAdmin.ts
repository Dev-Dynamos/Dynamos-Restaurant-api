import { StockRepository } from "../repository/implement/StockRepository";
import { GetStockUseCase } from "../useCases/GetStockUseCase";
import { GetStockController } from "./GetAdminController";

const stockRepository = new StockRepository();
const getStockUseCase = new GetStockUseCase(stockRepository);
const getStockController = new GetStockController(getStockUseCase);

export { getStockController };
