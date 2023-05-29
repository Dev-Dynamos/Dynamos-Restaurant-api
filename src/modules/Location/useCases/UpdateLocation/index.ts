import { LocationRepository } from "../../repositories/implementation/LocationRepository";
import { UpdateLocationUseCase } from "./updateLocationUseCase";
import { UpdateLocationController } from "./updateLocationController";

const locationRepository = new LocationRepository()
const updateLocationUseCase = new UpdateLocationUseCase(locationRepository)
const updateLocationController = new UpdateLocationController(updateLocationUseCase)

export { updateLocationController }