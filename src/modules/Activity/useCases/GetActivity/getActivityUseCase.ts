import { RequestError } from "../../../../typeErrors/error-api";
import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";

export class GetActivityUseCase {
  constructor(private activityRepository: ActivityRepository){}

  async execute(id: string){
    const activity = await this.activityRepository.findById(id)

    if(!activity) throw new RequestError("Actividade não encontrada.", 404)

    return activity
  }
}