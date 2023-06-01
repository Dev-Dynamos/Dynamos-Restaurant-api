import { CreateMenuDTO } from "../MenuDTOs/CreateMenuDTO";
import { IMenuRepository } from "../repository/IMenuRepository";

export class CreateMenuUseCase {
  constructor(private menuRepository: IMenuRepository) {}

  async execute({ nome, idProducto }: CreateMenuDTO) {
    const menu = await this.menuRepository.create({
      nome,
      idProducto,
    });

    return menu;
  }
}
