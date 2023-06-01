import { StockRepository } from "../repository/implement/AdminRepository";
import { CreateStockUseCase } from "../useCases/CreateStockUseCase";
import { CreateStockController } from "./CreateStockController";

const stockRepository = new StockRepository();
const stockAdminUseCase = new CreateStockUseCase(stockRepository);
const stockAdminController = new CreateStockController(stockAdminUseCase);

export { stockAdminController };
