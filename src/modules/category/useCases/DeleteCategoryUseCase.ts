import { CategoryRepository } from "../repository/implements/CategoryRepository";

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(id: string) {
    const category = this.categoryRepository.delete(id);

    return category;
  }
}
