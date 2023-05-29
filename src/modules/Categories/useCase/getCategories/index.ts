import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { GetCategoryController } from "./getCategoryController";
import { GetCategoryUseCase } from "./getCategoryUseCase";

const categoryRepository = new CategoryRepository()
const getCategoryUseCase = new GetCategoryUseCase(categoryRepository)
const getCategoryController = new GetCategoryController(getCategoryUseCase)

export { getCategoryController }