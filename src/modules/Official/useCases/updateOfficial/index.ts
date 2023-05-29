import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";
import { UpdateOfficialController } from "./updateOfficialController";
import { UpdateOfficialUseCase } from "./updateOfficialUseCase";

const officialRepository = new OfficialRepository()
const updateOfficialUseCase = new UpdateOfficialUseCase(officialRepository)
const updateOfficialController = new UpdateOfficialController(updateOfficialUseCase)

export { updateOfficialController }