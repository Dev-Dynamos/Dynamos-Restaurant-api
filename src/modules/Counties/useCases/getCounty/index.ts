import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { GetOneCountyController } from "./getOneCountyController";
import { GetOneCountyUseCase } from "./getOneCountyUseCase";

const countyRepository = new CountyRepository()
const getOneCountyUseCase = new GetOneCountyUseCase(countyRepository)
const getOneCountyController = new GetOneCountyController(getOneCountyUseCase)

export { getOneCountyController }
