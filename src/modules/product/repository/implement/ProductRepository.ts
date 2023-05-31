import { prismaClient } from "../../../../database/prismaClient";
import { CreateProductDTO } from "../../ProductDTOs/CreateProductDTO";
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
}
