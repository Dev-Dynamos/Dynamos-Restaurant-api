import { RequestError } from "../../../../typeErrors/error-api";
import { LocationDTO } from "../../dtos";
import { LocationRepository } from "../../repositories/implementation/LocationRepository";

export class UpdateLocationUseCase {
  constructor(private locationRepository: LocationRepository){}

  async execute({provinciaId, municipioId, endereco1, endereco2, id}: LocationDTO){
    const locationExists = await this.locationRepository.findById(id)
    
    const provinceExists = await this.locationRepository.findProvinceById(provinciaId)
    
    if(!provinceExists) throw new RequestError("Provincia não encontrada", 404)
    
    if(municipioId){
      const countyExists = await this.locationRepository.findCountyById(municipioId);
      if(!countyExists) throw new RequestError("Muncipio não encontrado", 404)
    }
    if(!locationExists) throw new RequestError("Localização não encontrada.", 404)

    const updatedLocation = await this.locationRepository.update({provinciaId, municipioId, endereco1, endereco2, id})
    return updatedLocation
  }
}