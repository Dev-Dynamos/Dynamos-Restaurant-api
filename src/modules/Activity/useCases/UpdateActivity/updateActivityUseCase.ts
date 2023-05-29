import { RequestError } from "../../../../typeErrors/error-api";
import { ActivityDTO } from "../../dtos";
import { ActivityRepository } from "../../repositories/implementation/ActivityRepository";

export class UpdateAtivityUseCase {
  constructor(private activityRepository: ActivityRepository) { }

  async execute({ id, nome, data, organizador, fotoUrl }: ActivityDTO) {
    const activityExists = await this.activityRepository.findById(id)

    if (!activityExists) throw new RequestError("Actividade não encontrada.", 404)

    const updatedActivity = await this.activityRepository.update({ id, nome, data, organizador, fotoUrl })
    return updatedActivity
  }
}