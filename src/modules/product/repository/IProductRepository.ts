import { CreateProductDTO } from "../ProductDTOs/CreateProductDTO";
import { Product } from "../model/Product";

export interface IProductRepository {
  create: ({ nome, categoriaId, preco }: CreateProductDTO) => Promise<Product>;
  get: () => Promise<Product[]>;
  delete: (id: string) => Promise<Product>;
  findById: (id: string) => Promise<Product | null>;
}
