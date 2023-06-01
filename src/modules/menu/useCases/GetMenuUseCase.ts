import { MenuRepository } from "../repository/implements/MenuRepository";

export class GetMenuUseCase {
  constructor(private menuRepository: MenuRepository) {}

  async execute() {
    const menu = await this.menuRepository.get();

    return menu;
  }
}
