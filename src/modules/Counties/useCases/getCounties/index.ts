import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { GetCountyController } from "./getCountyController";
import { GetCountyUseCase } from "./getCountyUseCase";

const countyRepository = new CountyRepository()
const getCountyUseCase = new GetCountyUseCase(countyRepository)
const getCountyController = new GetCountyController(getCountyUseCase)

export {getCountyController}