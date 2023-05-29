import { OutputProfileRepository } from "../../repositories/implementations/OutputProfileRepository";
import { GetOutputProfilesController } from "./GetOutputProfilesController";
import { GetOutputProfilesUseCase } from "./GetOutputProfilesUseCase";


const outputProfileRepository = new OutputProfileRepository();
const getOutputProfilesUseCase = new GetOutputProfilesUseCase(outputProfileRepository);
const getOutputProfilesController = new GetOutputProfilesController(getOutputProfilesUseCase);

export { getOutputProfilesController };