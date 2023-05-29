import { RequestError } from "../../../../typeErrors/error-api";
import { LocationRepository } from "../../repositories/implementation/LocationRepository";

export class GetLocationUseCase{
  constructor(private locationRepository: LocationRepository){}

  async execute(id: string){
    const location = await this.locationRepository.findById(id)

    if(!location) throw new RequestError("Localização não encontrada.", 404)

    return location 
  }
}