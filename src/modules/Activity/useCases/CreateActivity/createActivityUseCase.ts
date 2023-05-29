import { RequestError } from "../../../../typeErrors/error-api";
import { ActivityDTO } from "../../dtos";
import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";

export class CreateActivityUseCase {
  constructor(private activityRepository: ActivityRepository){}

  async execute({nome, data, organizador, escolaId}: ActivityDTO){
    const activityAlreadyExists = await this.activityRepository.findByName(nome)

    if(activityAlreadyExists) throw new RequestError("Actividade já existe", 400)

    const newActivity = await this.activityRepository.save({nome, data, organizador, escolaId})
    
    return newActivity
  }
}