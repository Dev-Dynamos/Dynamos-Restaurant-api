import { MenuRepository } from "../repository/implements/MenuRepository";
import { DeleteMenuUseCase } from "../useCases/DeleteMenuUseCase";
import { DeleteMenuController } from "./DeleteMenuController";

const categoryRepository = new MenuRepository();
const deleteMenuUseCase = new DeleteMenuUseCase(categoryRepository);
const deleteMenuController = new DeleteMenuController(deleteMenuUseCase);

export { deleteMenuController };
