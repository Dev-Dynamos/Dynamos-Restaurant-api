import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";
import { CreateActivityUseCase } from "./createActivityUseCase";
import { CreateActivityController } from "./createActivityController";

const activityRepository = new ActivityRepository()
const createActivityUseCase = new CreateActivityUseCase(activityRepository)
const createActivityController = new CreateActivityController(createActivityUseCase)

export { createActivityController }