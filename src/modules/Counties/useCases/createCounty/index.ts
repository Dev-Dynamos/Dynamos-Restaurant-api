import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { CreateCountyController } from "./createCountyController";
import { CreateCountyUseCase } from "./createCountyUseCase";

const countyRepository = new CountyRepository()
const createCountyUseCase = new CreateCountyUseCase(countyRepository)
const createCountyController = new CreateCountyController(createCountyUseCase)

export { createCountyController }