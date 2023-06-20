import { PositionRepository } from "../repository/implement/PositionRepository";

export class GetPositionUseCase {
  constructor(private positionRepository: PositionRepository) {}

  async execute() {
    const position = await this.positionRepository.get();

    return position;
  }
}
