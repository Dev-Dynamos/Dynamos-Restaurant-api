import { RequestError } from "../../../../typeErrors/error-api";
import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";

export class DeleteActivityUseCase {
  constructor(private activityRepository: ActivityRepository){}

  async execute(id: string){
    const activityExists = await this.activityRepository.findById(id)

    if(!activityExists) throw new RequestError("Actividade não encontrada", 404)

    const deletedActivity = await this.activityRepository.delete(id)
    return deletedActivity
  }
}