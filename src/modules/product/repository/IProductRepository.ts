import { CreateProductDTO } from "../ProductDTOs/CreateProductDTO";
import { Product } from "../model/Product";

export interface IProductRepository {
  create: ({ nome, idCategoria, preco }: CreateProductDTO) => Promise<Product>;
  get: () => Promise<Product[]>;
}
