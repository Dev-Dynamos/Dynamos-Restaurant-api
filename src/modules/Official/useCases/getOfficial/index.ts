import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";
import { GetOfficialController } from "./getOfficialController";
import { GetOfficialUseCase } from "./getOfficlalUseCae";

const officialRepository = new OfficialRepository()
const getOfficialUseCase= new GetOfficialUseCase(officialRepository)
const getOfficialController = new GetOfficialController(getOfficialUseCase)

export { getOfficialController }