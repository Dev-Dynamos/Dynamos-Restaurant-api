import { prismaClient } from "../../../../database/prismaClient";
import { CreateMenuDTO } from "../../MenuDTOs/CreateMenuDTO";
import { Menu } from "../../model/Menu";
import { IMenuRepository } from "../IMenuRepository";

export class MenuRepository implements IMenuRepository {
  async create({ nome }: CreateMenuDTO): Promise<Menu> {
    const menu = await prismaClient.menu.create({
      data: {
        nome,
      },
    });
    return menu;
  }

  async get(): Promise<Menu[]> {
    const menu = await prismaClient.menu.findMany();
    return menu;
  }

  async delete(id: string): Promise<Menu> {
    const menu = await prismaClient.menu.delete({
      where: {
        id,
      },
    });
    return menu;
  }
}
