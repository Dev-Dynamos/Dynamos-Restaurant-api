import { prismaClient } from "../../../../database/prismaClient";
import { Stock } from "../../model/Stock";
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

  async get(): Promise<Stock[]> {
    const stock = await prismaClient.stock.findMany();
    return stock;
  }

  async delete(id: string): Promise<Stock> {
    const stock = await prismaClient.stock.delete({
      where: {
        id,
      },
    });
    return stock;
  }
}
