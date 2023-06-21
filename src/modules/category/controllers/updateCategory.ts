import { CategoryRepository } from "../repository/implements/CategoryRepository";
import { UpdateCategoryUseCase } from "../useCases/UpdateCategoryUseCase";
import { UpdateCategoryController } from "./UpdateCategoryController";

const categoryRepository = new CategoryRepository();
const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);
const updateCategoryController = new UpdateCategoryController(
  updateCategoryUseCase
);

export { updateCategoryController };
