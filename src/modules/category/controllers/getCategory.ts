import { CategoryRepository } from "../repository/implements/CategoryRepository";
import { GetCategorykUseCase } from "../useCases/GetCategoryUseCase";
import { GetCategoryController } from "./GetCategoryController";

const categoryRepository = new CategoryRepository();
const getCategoryUseCase = new GetCategorykUseCase(categoryRepository);
const getCategoryController = new GetCategoryController(getCategoryUseCase);

export { getCategoryController };
