import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";
import { GetActivitiesUseCase } from "./getActivitiesUseCase";
import { GetActivitiesController } from "./getActivitiesController";

const activityRepository = new ActivityRepository()
const getActivitiesUseCase = new GetActivitiesUseCase(activityRepository)
const getActivitiesController = new GetActivitiesController(getActivitiesUseCase)

export { getActivitiesController }