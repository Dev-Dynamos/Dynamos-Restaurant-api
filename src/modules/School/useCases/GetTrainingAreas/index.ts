import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { GetTrainingAreasController } from "./GetTrainingAreasController";
import { GetTrainingAreasUseCase } from "./GetTrainingAreasUseCase";

const schoolRepository = new SchoolRepository();
const getTrainingAreasUseCase = new GetTrainingAreasUseCase(schoolRepository);
const getTrainingAreasController = new GetTrainingAreasController(getTrainingAreasUseCase);

export { getTrainingAreasController };