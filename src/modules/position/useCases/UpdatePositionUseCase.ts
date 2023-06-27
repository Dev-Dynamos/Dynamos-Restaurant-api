import { UpdatePositionDTO } from "../PositionDTOs/CreatePositionDTO";
import { PositionRepository } from "../repository/implement/PositionRepository";

export class UpdatePositionUseCase {
  constructor(private positionRepository: PositionRepository) {}

  async execute({ id, nome }: UpdatePositionDTO) {
    const position = await this.positionRepository.update({
      id,
      nome,
    });

    return position;
  }
}
