import { CreateStockDTO } from "../stockDTOs/CreateStockDTO";
import { Stock } from "../model/Stock";

export interface IStockRepository {
  create: ({ productoId, quantidade }: CreateStockDTO) => Promise<Stock>;
  get: () => Promise<Stock[]>;
  delete: (id: string) => Promise<Stock>;
}
