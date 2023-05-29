import { LocationRepository } from "../../repositories/implementation/LocationRepository";

export class GetLocationsUseCase {
  constructor(private locationRepository: LocationRepository){}

  async execute(){
    const locations = await this.locationRepository.getLocations()

    return locations
  }
}