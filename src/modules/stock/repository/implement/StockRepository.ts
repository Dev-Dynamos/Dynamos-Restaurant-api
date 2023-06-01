import { prismaClient } from "../../../../database/prismaClient";
import { CreateStockDTO } from "../../stockDTOs/CreateStockDTO";
import { IStockRepository } from "../IStockRepository";

export class StockRepository implements IStockRepository {
  async create({ idProducto, quantidade }: CreateStockDTO) {
    const stock = prismaClient.stock.create({
      data: {
        idProducto,
        quantidade,
      },
    });
    return stock;
  }
}
