import { prismaClient } from "../../../../database/prismaClient";
import { CreateProductDTO } from "../../ProductDTOs/CreateProductDTO";
import { Product } from "../../model/Product";
import { IProductRepository } from "../IProductRepository";

export class ProductRepository implements IProductRepository {
  async create({ nome, idCategoria, preco }: CreateProductDTO) {
    const product = prismaClient.producto.create({
      data: {
        nome,
        preco,
        idCategoria,
      },
    });
    return product;
  }

  async get(): Promise<Product[]> {
    const product = await prismaClient.producto.findMany();
    return product;
  }

  async delete(id: string): Promise<Product> {
    const product = await prismaClient.producto.delete({
      where: {
        id,
      },
    });
    return product;
  }
}
