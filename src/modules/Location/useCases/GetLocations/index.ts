import { LocationRepository } from "../../repositories/implementation/LocationRepository";
import { GetLocationsUseCase } from "./getLocationsUseCase";
import { GetLocationsController } from "./getLocationsController";

const locationRepository = new LocationRepository()
const getLocationsUseCase = new GetLocationsUseCase(locationRepository)
const getLocationsController = new GetLocationsController(getLocationsUseCase)

export { getLocationsController }