import { LocationRepository } from "../../repositories/implementation/LocationRepository";
import { DeleteLocationUseCase } from "./deleteLocationUseCase";
import { DeleteLocationController } from "./deleteLocationController";

const locationRepository = new LocationRepository()
const deleteLocationUseCase = new DeleteLocationUseCase(locationRepository)
const deleteLocationController = new DeleteLocationController(deleteLocationUseCase)

export {deleteLocationController}