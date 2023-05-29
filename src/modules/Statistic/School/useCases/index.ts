import { SchoolStatisticRepository } from "../repositories/implementations/SchoolStatisticRepository";
import { SchoolStatisticController } from "./SchoolStatisticController";
import { SchoolStatisticUseCase } from "./SchoolStatisticUseCase";


const schoolStatisticRepository = new SchoolStatisticRepository();
const schoolStatisticUseCase = new SchoolStatisticUseCase(schoolStatisticRepository);
const schoolStatisticController = new SchoolStatisticController(schoolStatisticUseCase);

export { schoolStatisticController }