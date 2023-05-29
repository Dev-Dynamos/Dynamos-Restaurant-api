import { RequestError } from "../../../../typeErrors/error-api";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

interface IRequest {
  id: string;
}

export class FindSchoolsByCategoryUseCase {
  constructor(private schoolRepository: SchoolRepository) { }

  async execute({ id }: IRequest) {
    const categoryExists = await this.schoolRepository.findCategoryById(id)

    if (!categoryExists) {
      throw new RequestError("Categoria não encontrada!", 404)
    }
    const category = await this.schoolRepository.filterSchoolByCategory(categoryExists.id)

    if (!category) {
      throw new RequestError("Categoria não encontrada!", 404)
    }
    return category;
  }
}