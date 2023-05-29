import { LocationRepository } from "../../repositories/implementation/LocationRepository";
import { GetLocationUseCase } from "./getLocationUseCase";
import { GetLocationController } from "./getLocationController";

const locationRepository = new LocationRepository()
const getLocationUseCase = new GetLocationUseCase(locationRepository)
const getLocationController = new GetLocationController(getLocationUseCase)

export { getLocationController }