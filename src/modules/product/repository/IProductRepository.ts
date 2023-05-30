import { CreateProductDTO } from "../ProductDTOs/CreateProductDTO";
import { Product } from "../model/Product";

export interface IProductRepository {
  create: ({ nome, descricao, preco }: CreateProductDTO) => Promise<Product>;
}
