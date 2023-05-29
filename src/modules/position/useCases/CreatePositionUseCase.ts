import { IPositionRepository } from "../repository/IPositionRepository";
import { CreatePositionDTO } from "../PositionDTOs/CreatePositionDTO";
import { prismaClient } from "../../../database/prismaClient";

export class CreatePositionUseCase {
  constructor(private positionRepository: IPositionRepository) {}

  async execute({ designacao }: CreatePositionDTO) {
    const position = await this.positionRepository.create({ designacao });

    return position;
  }
}
