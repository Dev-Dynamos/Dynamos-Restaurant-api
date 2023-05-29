import { OutputProfileRepository } from "../../repositories/implementations/OutputProfileRepository";
import { UpdateOutputProfileController } from "./UpdateOutputProfileController";
import { UpdateOutputProfileUseCase } from "./UpdateOutputProfileUseCase";


const trainingAreasRepository = new OutputProfileRepository();
const updateOutputProfileUseCase = new UpdateOutputProfileUseCase(trainingAreasRepository);
const updateOutputProfileController = new UpdateOutputProfileController(updateOutputProfileUseCase);

export { updateOutputProfileController };