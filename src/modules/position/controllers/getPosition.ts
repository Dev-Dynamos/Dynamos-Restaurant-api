import { PositionRepository } from "../repository/implement/PositionRepository";
import { GetPositionUseCase } from "../useCases/GetPositionUseCase";
import { GetPositionController } from "./GetPositionController";

const positionRepository = new PositionRepository();
const getPositionUseCase = new GetPositionUseCase(positionRepository);
const getPositionController = new GetPositionController(getPositionUseCase);

export { getPositionController };
