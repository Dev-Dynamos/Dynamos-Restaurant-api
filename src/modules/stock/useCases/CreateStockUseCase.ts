import { CreateStockDTO } from "../stockDTOs/CreateStockDTO";
import { IStockRepository } from "../repository/IStockRepository";

export class CreateStockUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute({ idProducto, quantidade }: CreateStockDTO) {
    const stock = await this.stockRepository.create({ idProducto, quantidade });

    return stock;
  }
}
