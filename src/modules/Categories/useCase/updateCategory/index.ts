import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { UpdateCategoryController } from "./updateCategoryController";
import { UpdateCategoryUseCase } from "./updateCategoryUseCase";


const categoryRepository = new CategoryRepository()
const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository)
const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

export {updateCategoryController}