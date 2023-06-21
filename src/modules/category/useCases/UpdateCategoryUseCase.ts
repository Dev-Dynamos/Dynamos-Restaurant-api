import { UpdateCategoryDTO } from "../CategoryDTOs/CreateCategoryDTO";
import { CategoryRepository } from "../repository/implements/CategoryRepository";

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute({ id, nome }: UpdateCategoryDTO) {
    const category = await this.categoryRepository.update({ id, nome });

    return category;
  }
}
