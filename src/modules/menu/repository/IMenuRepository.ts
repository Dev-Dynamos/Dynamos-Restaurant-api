import { CreateMenuDTO } from "../MenuDTOs/CreateMenuDTO";
import { Menu } from "../model/Menu";

export interface IMenuRepository {
  create({ nome, idProducto }: CreateMenuDTO): Promise<Menu>;
  get(): Promise<Menu[]>;
}