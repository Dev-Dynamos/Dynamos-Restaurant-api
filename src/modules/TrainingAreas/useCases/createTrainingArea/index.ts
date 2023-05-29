import { TrainingAreasRepository } from "../../repositories/implementations/TrainingAreasRepository";
import { CreateTrainingAreaController } from "./CreateTrainingAreaController";
import { CreateTrainingAreaUseCase } from "./CreateTrainingAreaUseCase";
import { SchoolRepository } from "../../../../../src//modules/School/repositories/implementation/SchoolRepository";

const schoolRepository = new SchoolRepository();
const trainingAreasRepository = new TrainingAreasRepository();
const createTrainingAreasUseCase = new CreateTrainingAreaUseCase(trainingAreasRepository, schoolRepository);
const createTrainingAreaController = new CreateTrainingAreaController(createTrainingAreasUseCase);

export { createTrainingAreaController };