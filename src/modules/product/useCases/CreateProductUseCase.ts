import { IProductRepository } from "../repository/IProductRepository";
import { CreateProductDTO } from "../ProductDTOs/CreateProductDTO";
import { ICategoryRepository } from "../../category/repository/ICategoryRepository";
import { AppError } from "../../../errors/AppError";

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ nome, preco,categoriaId, descricao, ficheiroId }: CreateProductDTO) {
    const categoryExists = await this.categoryRepository.findById(categoriaId)

    if (!categoryExists) 
      throw new AppError("Categoria não encontrada !", 404);

    const product = await this.productRepository.create({
      nome,
      descricao,
      preco,
      categoriaId,
      ficheiroId
    });

    return product;
  }
}
