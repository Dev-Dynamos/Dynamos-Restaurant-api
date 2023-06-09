import { CategoryRepository } from "../repository/implements/CategoryRepository";

export class GetCategorykUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute() {
    const category = await this.categoryRepository.get();

    return category;
  }
}
