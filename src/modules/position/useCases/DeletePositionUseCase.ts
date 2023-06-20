import { PositionRepository } from "../repository/implement/PositionRepository";

export class DeletePositionUseCase {
  constructor(private positionRepository: PositionRepository) {}

  async execute(id: string) {
    const position = this.positionRepository.delete(id);

    return position;
  }
}
