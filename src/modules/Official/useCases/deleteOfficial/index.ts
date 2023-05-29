import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";
import { DeleteOfficialController } from "./deleteOfficialController";
import { DeleteOfficialUseCase } from "./deleteOfficialUseCase";

const officialRepository = new OfficialRepository()
const deleteOfficialUseCase = new DeleteOfficialUseCase(officialRepository)
const deleteOfficialController = new DeleteOfficialController(deleteOfficialUseCase)

export { deleteOfficialController }