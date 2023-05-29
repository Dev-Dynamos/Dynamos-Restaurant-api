import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";
import { GetActivityUseCase } from "./getActivityUseCase";
import { GetActivityController } from "./getActivityController";

const activityRepository = new ActivityRepository()
const getActivityUseCase = new GetActivityUseCase(activityRepository)
const getActivityController = new GetActivityController(getActivityUseCase)

export { getActivityController }