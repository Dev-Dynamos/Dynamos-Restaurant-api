import { ProductRepository } from "../repository/implement/ProductRepository";

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute() {
    const product = await this.productRepository.get();

    return product;
  }
}
