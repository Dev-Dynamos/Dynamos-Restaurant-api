import { TrainingAreasRepository } from "../../repositories/implementations/TrainingAreasRepository";
import { UpdateTrainingAreaController } from "./UpdateTrainingAreaController";
import { UpdateTrainingAreaUseCase } from "./UpdateTrainingAreaUseCase";


const trainingAreasRepository = new TrainingAreasRepository();
const updateTrainingAreaUseCase = new UpdateTrainingAreaUseCase(trainingAreasRepository);
const updateTrainingAreaController = new UpdateTrainingAreaController(updateTrainingAreaUseCase);

export { updateTrainingAreaController };