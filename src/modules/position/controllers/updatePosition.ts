import { PositionRepository } from "../repository/implement/PositionRepository";
import { UpdatePositionUseCase } from "../useCases/UpdatePositionUseCase";
import { UpdateClientController } from "./UpdatePositionController";

const positionRepository = new PositionRepository();
const updatePositionUseCase = new UpdatePositionUseCase(positionRepository);
const updatePositionController = new UpdateClientController(
  updatePositionUseCase
);

export { updatePositionController };
