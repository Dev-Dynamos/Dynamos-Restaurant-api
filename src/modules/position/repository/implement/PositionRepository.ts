import { prismaClient } from "../../../../database/prismaClient";
import { CreatePositionDTO } from "../../PositionDTOs/CreatePositionDTO";
import { IPositionRepository } from "../IPositionRepository";

export class PositionRepository implements IPositionRepository {
  async create({ designacao }: CreatePositionDTO) {
    const position = prismaClient.cargo.create({
      data: {
        designacao,
      },
    });
    return position;
  }
}
