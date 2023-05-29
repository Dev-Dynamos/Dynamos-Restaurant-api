import { LocationRepository } from "../../repositories/implementation/LocationRepository";
import { CreateLocationUseCase } from "./createLocationUseCase";
import { CreateLocationController } from "./createLocationController";

const locationRepository = new LocationRepository()
const createLocationUseCase = new CreateLocationUseCase(locationRepository)
const createLocationController = new CreateLocationController(createLocationUseCase)

export { createLocationController }