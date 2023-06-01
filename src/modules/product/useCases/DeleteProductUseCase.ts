import { ProductRepository } from "../repository/implement/ProductRepository";

export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string) {
    const product = this.productRepository.delete(id);

    return product;
  }
}
