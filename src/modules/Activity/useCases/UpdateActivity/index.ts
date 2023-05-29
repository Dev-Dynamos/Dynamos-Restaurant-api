import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";
import { UpdateAtivityUseCase } from "./updateActivityUseCase";
import { UpdateActivityController } from "./updateActivityController";

const activityRepository = new ActivityRepository()
const updateActivityUseCase = new UpdateAtivityUseCase(activityRepository)
const updateActivityController = new UpdateActivityController(updateActivityUseCase)

export { updateActivityController }