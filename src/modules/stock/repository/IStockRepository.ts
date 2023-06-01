import { CreateStockDTO } from "../stockDTOs/CreateStockDTO";
import { Stock } from "../model/Stock";

export interface IStockRepository {
  create: ({ idProducto, quantidade }: CreateStockDTO) => Promise<Stock>;
  get: () => Promise<Stock[]>;
}
