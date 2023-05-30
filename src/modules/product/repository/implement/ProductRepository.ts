import { prismaClient } from "../../../../database/prismaClient";
import { CreateProductDTO } from "../../ProductDTOs/CreateProductDTO";
import { IProductRepository } from "../IProductRepository";

export class ProductRepository implements IProductRepository {
  async create({ nome, descricao, preco }: CreateProductDTO) {
    const product = prismaClient.producto.create({
      data: {
        nome,
        descricao,
        preco,
      },
    });
    return product;
  }
}
