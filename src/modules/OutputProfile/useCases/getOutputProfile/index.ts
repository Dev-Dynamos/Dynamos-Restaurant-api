import { OutputProfileRepository } from "../../repositories/implementations/OutputProfileRepository";
import { GetOutputProfileController } from "./GetOutputProfileController";
import { GetOutputProfileUseCase } from "./GetOutputProfileUseCase";


const outputProfileRepository = new OutputProfileRepository();
const getOutputProfileUseCase = new GetOutputProfileUseCase(outputProfileRepository);
const getOutputProfileController = new GetOutputProfileController(getOutputProfileUseCase);

export { getOutputProfileController };