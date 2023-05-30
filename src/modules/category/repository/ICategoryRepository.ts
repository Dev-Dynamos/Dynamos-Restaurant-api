import { CreateCategoryDTO } from "../CategoryDTOs/CreateCategoryDTO";
import { Category } from "../model/Category";

export interface ICategoryRepository {
  create({ nome }: CreateCategoryDTO): Promise<Category>;
  get(): Promise<Category[]>;
}
