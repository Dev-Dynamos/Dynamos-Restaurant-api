import { MenuRepository } from "../repository/implements/MenuRepository";
import { CreateMenuUseCase } from "../useCases/CreateMenuUseCase";
import { CreateMenuController } from "./CreateMenuController";

const menuRepository = new MenuRepository();
const createMenuUseCase = new CreateMenuUseCase(menuRepository);
const createMenuController = new CreateMenuController(createMenuUseCase);

export { createMenuController };
