import { prismaClient } from "../../../../database/prismaClient";
import { CreateProductDTO } from "../../ProductDTOs/CreateProductDTO";
import { Product } from "../../model/Product";
import { IProductRepository } from "../IProductRepository";

export class ProductRepository implements IProductRepository {
  async create ({ nome , categoriaId, preco, descricao, ficheiroId }: CreateProductDTO) {
    const product = prismaClient.producto.create({
      data: {
        nome,
        preco,
        categoriaId,
        descricao,
        ficheiroId,
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

  async findById (id: string): Promise<Product | null> {
    const product = await prismaClient.producto.findUnique({
      where: {
        id
      }
    });

    return product
  }
}
