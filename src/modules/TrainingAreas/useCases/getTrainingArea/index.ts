import { TrainingAreasRepository } from "../../repositories/implementations/TrainingAreasRepository";
import { GetTrainingAreaController } from "./GetTrainingAreaController";
import { GetTrainingAreaUseCase } from "./GetTrainingAreaUseCase";


const trainingAreasRepository = new TrainingAreasRepository();
const getTrainingAreaUseCase = new GetTrainingAreaUseCase(trainingAreasRepository);
const getTrainingAreaController = new GetTrainingAreaController(getTrainingAreaUseCase);

export { getTrainingAreaController };