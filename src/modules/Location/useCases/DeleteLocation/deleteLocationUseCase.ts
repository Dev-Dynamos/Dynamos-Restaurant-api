import { RequestError } from "../../../../typeErrors/error-api";
import { LocationRepository } from "../../repositories/implementation/LocationRepository";

export class DeleteLocationUseCase{
  constructor(private locationRepository: LocationRepository){}

  async execute(id: string){
    const locationExists = await this.locationRepository.findById(id)

    if(!locationExists) throw new RequestError("Localização não encontrada.", 404)

    const deletedLocation = await this.locationRepository.delete(id)
    return deletedLocation
  }
}