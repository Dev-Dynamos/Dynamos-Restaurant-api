import { ProductRepository } from "../repository/implement/ProductRepository";
import { DeleteProductUseCase } from "../useCases/DeleteProductUseCase";
import { DeleteProductController } from "./DeleteProductController";

const productRepository = new ProductRepository();
const deleteProductUseCase = new DeleteProductUseCase(productRepository);
const deleteProductController = new DeleteProductController(
  deleteProductUseCase
);

export { deleteProductController };
