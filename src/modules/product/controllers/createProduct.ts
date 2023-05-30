import { ProductRepository } from "../repository/implement/ProductRepository";
import { CreateProductUseCase } from "../useCases/CreateProductUseCase";
import { CreateProductController } from "./Product";

const productRepository = new ProductRepository();
const createProductUseCase = new CreateProductUseCase(productRepository);
const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductController };
