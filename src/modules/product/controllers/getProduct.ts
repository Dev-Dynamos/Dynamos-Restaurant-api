import { ProductRepository } from "../repository/implement/ProductRepository";
import { GetProductUseCase } from "../useCases/GetProductUseCase";
import { GetProductController } from "./GetAProductController";

const productRepository = new ProductRepository();
const getProductUseCase = new GetProductUseCase(productRepository);
const getProductController = new GetProductController(getProductUseCase);

export { getProductController };
