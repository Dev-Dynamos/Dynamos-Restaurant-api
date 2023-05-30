import { CategoryRepository } from "../repository/implements/categoryRepository";
import { CreateCategoryUseCase } from "../useCases/CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoryRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
