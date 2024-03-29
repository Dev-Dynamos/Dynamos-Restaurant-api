import { CreateMenuDTO } from "../MenuDTOs/CreateMenuDTO";
import { Menu } from "../model/Menu";

export interface IMenuRepository {
  create({ nome, preco }: CreateMenuDTO): Promise<Menu>;
  get(): Promise<Menu[]>;
  delete: (id: string) => Promise<Menu>;
  findById: (id: string) => Promise<Menu | null>;
}
