import { StockRepository } from "../repository/implement/StockRepository";

export class GetStockUseCase {
  constructor(private stockRepository: StockRepository) {}

  async execute() {
    const stock = await this.stockRepository.get();

    return stock;
  }
}
