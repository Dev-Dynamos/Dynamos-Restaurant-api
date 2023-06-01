import { CategoryRepository } from "../repository/implements/CategoryRepository";
import { DeleteCategoryUseCase } from "../useCases/DeleteCategoryUseCase";
import { DeleteCategoryController } from "./DeleteCategoryController";

const categoryRepository = new CategoryRepository();
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);
const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase
);

export { deleteCategoryController };
