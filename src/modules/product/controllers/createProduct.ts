import { CategoryRepository } from "../../category/repository/implements/CategoryRepository";
import { ProductRepository } from "../repository/implement/ProductRepository";
import { CreateProductUseCase } from "../useCases/CreateProductUseCase";
import { CreateProductController } from "./CreateProductControllers";

const productRepository = new ProductRepository();
const categoryRepository = new CategoryRepository();

const createProductUseCase = new CreateProductUseCase(productRepository, categoryRepository);
const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductController };
