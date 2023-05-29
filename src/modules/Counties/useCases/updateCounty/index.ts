import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { UpdateCountyController } from "./updateCountyController";
import { UpdateCountyUseCase } from "./updateCountyUseCase";

const countyRepository = new CountyRepository()
const updateCountyUseCase = new UpdateCountyUseCase(countyRepository)
const updateCountyController = new UpdateCountyController(updateCountyUseCase)

export { updateCountyController }