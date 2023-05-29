import { TrainingAreasRepository } from "../../repositories/implementations/TrainingAreasRepository";
import { GetTrainingAreasController } from "./GetTrainingAreasController";
import { GetTrainingAreasUseCase } from "./GetTrainingAreasUseCase";


const trainingAreasRepository = new TrainingAreasRepository();
const getTrainingAreasUseCase = new GetTrainingAreasUseCase(trainingAreasRepository);
const getTrainingAreasController = new GetTrainingAreasController(getTrainingAreasUseCase);

export { getTrainingAreasController };