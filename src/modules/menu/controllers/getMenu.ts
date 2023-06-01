import { MenuRepository } from "../repository/implements/MenuRepository";
import { GetMenuUseCase } from "../useCases/GetMenuUseCase";
import { GetMenuController } from "./GetMenuController";

const menuRepository = new MenuRepository();
const getMenuUseCase = new GetMenuUseCase(menuRepository);
const getMenuController = new GetMenuController(getMenuUseCase);

export { getMenuController };
