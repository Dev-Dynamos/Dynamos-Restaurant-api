import { prismaClient } from "../../../../database/prismaClient";
import { CreatePositionDTO } from "../../PositionDTOs/CreatePositionDTO";
import { Position } from "../../model/Position";
import { IPositionRepository } from "../IPositionRepository";

export class PositionRepository implements IPositionRepository {
  async create({ nome }: CreatePositionDTO) {
    const position = prismaClient.cargo.create({
      data: {
        nome,
      },
    });
    return position;
  }

  async get(): Promise<Position[]> {
    const position = await prismaClient.cargo.findMany();
    return position;
  }

  async delete(id: string): Promise<Position> {
    const position = await prismaClient.cargo.delete({
      where: {
        id,
      },
    });
    return position;
  }
}
