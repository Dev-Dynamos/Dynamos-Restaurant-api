import { OutputProfileRepository } from "../../repositories/implementations/OutputProfileRepository";
import { DeleteOutputProfileController } from "./DeleteOutputProfileController";
import { DeleteOutputProfileUseCase } from "./DeleteOutputProfileUseCase";


const outputProfileRepository = new OutputProfileRepository();
const deleteOutputProfileUseCase = new DeleteOutputProfileUseCase(outputProfileRepository);
const deleteOutputProfileController = new DeleteOutputProfileController(deleteOutputProfileUseCase);

export { deleteOutputProfileController };