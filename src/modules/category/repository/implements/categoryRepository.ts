import { prismaClient } from "../../../../database/prismaClient";
import {
  CreateCategoryDTO as CreateCategoryDTO,
  UpdateCategoryDTO,
} from "../../CategoryDTOs/CreateCategoryDTO";
import { Category } from "../../model/Category";
import { ICategoryRepository as ICategoryRepository } from "../ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  async create({ nome }: CreateCategoryDTO): Promise<Category> {
    const category = await prismaClient.categoria.create({
      data: {
        nome,
      },
    });
    return category;
  }

  async get(): Promise<Category[]> {
    const category = await prismaClient.categoria.findMany();
    return category;
  }

  async delete(id: string): Promise<Category> {
    const category = await prismaClient.categoria.delete({
      where: {
        id,
      },
    });
    return category;
  }

  async update({ id, nome }: UpdateCategoryDTO) {
    const category = await prismaClient.categoria.update({
      data: {
        nome,
      },
      where: {
        id: id,
      },
    });

    return category;
  }
}
