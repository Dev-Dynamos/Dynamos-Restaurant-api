import { PositionRepository } from "../repository/implement/PositionRepository";
import { CreatePositionUseCase } from "../useCases/CreatePositionUseCase";
import { CreatePositionController } from "./CreatePositionController";

const positionRepository = new PositionRepository();
const createPositionUseCase = new CreatePositionUseCase(positionRepository);
const createPositionController = new CreatePositionController(
  createPositionUseCase
);

export { createPositionController };
