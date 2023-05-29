import { CountyRepository } from "../../repositories/implamentations/CountyRepository";
import { DeleteCountyController } from "./deleteCountyController";
import { DeleteCountyUseCase } from "./deleteCountyUseCase";

const countyRepository = new CountyRepository()
const deleteCountyUseCase = new DeleteCountyUseCase(countyRepository)
const deleteCountyController = new DeleteCountyController(deleteCountyUseCase)

export { deleteCountyController }