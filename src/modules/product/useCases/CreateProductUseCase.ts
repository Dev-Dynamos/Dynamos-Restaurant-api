import { IProductRepository } from "../repository/IProductRepository";
import { CreateProductDTO } from "../ProductDTOs/CreateProductDTO";

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute({ nome, descricao, preco }: CreateProductDTO) {
    const product = await this.productRepository.create({
      nome,
      descricao,
      preco,
    });

    return product;
  }
}
