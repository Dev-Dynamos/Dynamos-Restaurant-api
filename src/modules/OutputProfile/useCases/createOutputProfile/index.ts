import { OutputProfileRepository } from "../../repositories/implementations/OutputProfileRepository";
import { CreateOutputProfileController } from "./CreateOutputProfileController";
import { CreateOutputProfileUseCase } from "./CreateOutputProfileUseCase";


const outputProfileRepository = new OutputProfileRepository();
const createOutputProfileUseCase = new CreateOutputProfileUseCase(outputProfileRepository);
const createOutputProfileController = new CreateOutputProfileController(createOutputProfileUseCase);

export { createOutputProfileController };