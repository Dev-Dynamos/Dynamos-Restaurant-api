import {
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from "../CategoryDTOs/CreateCategoryDTO";
import { Category } from "../model/Category";

export interface ICategoryRepository {
  create({ nome }: CreateCategoryDTO): Promise<Category>;
  get(): Promise<Category[]>;
  delete: (id: string) => Promise<Category>;
  update({ id, nome }: UpdateCategoryDTO): Promise<Category>;
  findById(id: string): Promise<Category | null>;
}
