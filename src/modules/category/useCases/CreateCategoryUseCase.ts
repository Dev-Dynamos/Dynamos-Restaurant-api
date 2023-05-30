import { CreateCategoryDTO } from "../CategoryDTOs/CreateCategoryDTO";
import { ICategoryRepository } from "../repository/ICategoryRepository";

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ nome }: CreateCategoryDTO) {
    const category = await this.categoryRepository.create({
      nome,
    });

    return category;
  }
}
