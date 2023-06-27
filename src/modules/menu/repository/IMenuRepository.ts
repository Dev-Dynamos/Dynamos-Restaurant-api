import { CreateMenuDTO } from "../MenuDTOs/CreateMenuDTO";
import { Menu } from "../model/Menu";

export interface IMenuRepository {
  create({ nome }: CreateMenuDTO): Promise<Menu>;
  get(): Promise<Menu[]>;
  delete: (id: string) => Promise<Menu>;
}
