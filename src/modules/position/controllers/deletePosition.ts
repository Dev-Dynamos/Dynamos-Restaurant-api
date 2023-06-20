import { PositionRepository } from "../repository/implement/PositionRepository";
import { DeletePositionUseCase } from "../useCases/DeletePositionUseCase";
import { DeletePositionController } from "./DeletePositionController";

const positionRepository = new PositionRepository();
const deletePositionUseCase = new DeletePositionUseCase(positionRepository);
const deletePositionController = new DeletePositionController(
  deletePositionUseCase
);

export { deletePositionController };
