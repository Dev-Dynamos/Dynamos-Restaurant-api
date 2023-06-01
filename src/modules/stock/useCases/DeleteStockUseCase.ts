import { StockRepository } from "../repository/implement/StockRepository";

export class DeleteStockUseCase {
  constructor(private stockRepository: StockRepository) {}

  async execute(id: string) {
    const stock = this.stockRepository.delete(id);

    return stock;
  }
}
