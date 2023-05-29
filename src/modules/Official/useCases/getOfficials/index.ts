import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";
import { GetOfficialsController } from "./getOfficialsController";
import { GetOfficialsUseCase } from "./getOfficialsUseCase";

const officialRepository = new OfficialRepository()
const getOfficialsUseCase = new GetOfficialsUseCase(officialRepository)
const getOfficialsController = new GetOfficialsController(getOfficialsUseCase)

export { getOfficialsController }