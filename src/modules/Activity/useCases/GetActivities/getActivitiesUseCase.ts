import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";

export class GetActivitiesUseCase {
  constructor(private activityRepository: ActivityRepository){}

  async execute(){
    const activities = await this.activityRepository.getActivities()

    return activities
  }
}