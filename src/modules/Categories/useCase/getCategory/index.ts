import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { GetOneCategoryController } from "./getOneCategoryController";
import { GetOneCategoryUseCase } from "./getOneCategoryUseCase";

const categoryRepository = new CategoryRepository()
const getOneCategoryUseCase = new GetOneCategoryUseCase(categoryRepository)
const getOneCategoryController = new GetOneCategoryController(getOneCategoryUseCase)

export {getOneCategoryController}