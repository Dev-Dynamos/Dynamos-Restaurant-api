import { MenuRepository } from "../repository/implements/MenuRepository";

export class DeleteMenuUseCase {
  constructor(private menuRepository: MenuRepository) {}

  async execute(id: string) {
    const menu = this.menuRepository.delete(id);

    return menu;
  }
}
