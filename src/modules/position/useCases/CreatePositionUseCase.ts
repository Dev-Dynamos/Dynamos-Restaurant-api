import { IPositionRepository } from "../repository/IPositionRepository";
import { CreatePositionDTO } from "../PositionDTOs/CreatePositionDTO";
import { prismaClient } from "../../../database/prismaClient";

export class CreatePositionUseCase {
  constructor(private positionRepository: IPositionRepository) {}

  async execute({ nome }: CreatePositionDTO) {
    const position = await this.positionRepository.create({ nome });

    return position;
  }
}
