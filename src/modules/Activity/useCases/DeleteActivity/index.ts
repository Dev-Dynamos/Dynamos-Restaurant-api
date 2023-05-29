import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";
import { DeleteActivityUseCase } from "./deleteActivityUseCase";
import { DeleteActivityController } from "./deleteActivityController";

const activityRepository = new ActivityRepository()
const deleteActivityUseCase = new DeleteActivityUseCase(activityRepository)
const deleteActivityController = new DeleteActivityController(deleteActivityUseCase)

export { deleteActivityController }