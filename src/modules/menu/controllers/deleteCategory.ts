import { MenuRepository } from "../repository/implements/MenuRepository";
import { DeleteMenuUseCase } from "../useCases/DeleteCategoryUseCase";
import { DeleteMenuController } from "./DeleteCategoryController";

const categoryRepository = new MenuRepository();
const deleteMenuUseCase = new DeleteMenuUseCase(categoryRepository);
const deleteMenuController = new DeleteMenuController(deleteMenuUseCase);

export { deleteMenuController };
