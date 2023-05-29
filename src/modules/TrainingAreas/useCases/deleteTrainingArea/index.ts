import { TrainingAreasRepository } from "../../repositories/implementations/TrainingAreasRepository";
import { DeleteTrainingAreaController } from "./DeleteTrainingAreaController";
import { DeleteTrainingAreaUseCase } from "./DeleteTrainingAreaUseCase";


const trainingAreasRepository = new TrainingAreasRepository();
const deleteTrainingAreasUseCase = new DeleteTrainingAreaUseCase(trainingAreasRepository);
const deleteTrainingAreaController = new DeleteTrainingAreaController(deleteTrainingAreasUseCase);

export { deleteTrainingAreaController };