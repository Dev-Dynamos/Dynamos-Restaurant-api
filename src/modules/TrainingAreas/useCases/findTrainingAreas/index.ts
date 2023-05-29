import { TrainingAreasRepository } from "../../repositories/implementations/TrainingAreasRepository";
import { FindTrainingAreasController } from "./FindTrainingAreasController";
import { FindTrainingAreasUseCase } from "./FindTrainingAreasUseCase";


const trainingAreasRepository = new TrainingAreasRepository();
const findTrainingAreasUseCase = new FindTrainingAreasUseCase(trainingAreasRepository);
const findTrainingAreasController = new FindTrainingAreasController(findTrainingAreasUseCase);

export { findTrainingAreasController };