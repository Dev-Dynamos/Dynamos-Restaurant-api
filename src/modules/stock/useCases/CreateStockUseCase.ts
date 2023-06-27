import { CreateStockDTO } from "../stockDTOs/CreateStockDTO";
import { IStockRepository } from "../repository/IStockRepository";

export class CreateStockUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute({ productoId, quantidade }: CreateStockDTO) {
    const stock = await this.stockRepository.create({ productoId, quantidade });

    return stock;
  }
}
