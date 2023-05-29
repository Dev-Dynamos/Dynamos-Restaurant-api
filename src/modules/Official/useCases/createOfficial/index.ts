import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";
import { CreateOfficialController } from "./createOfficialController";
import { CreateOfficialUseCase } from "./createOfficialUseCase";

const officialRepository = new OfficialRepository()
const createOfficialUseCase = new CreateOfficialUseCase(officialRepository)
const createOfficialController = new CreateOfficialController(createOfficialUseCase)

export { createOfficialController } 