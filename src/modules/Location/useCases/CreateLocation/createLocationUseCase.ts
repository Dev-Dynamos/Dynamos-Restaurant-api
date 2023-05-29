import { RequestError } from "../../../../typeErrors/error-api";
import { LocationDTO } from "../../dtos";
import { LocationRepository } from "../../repositories/implementation/LocationRepository";

export class CreateLocationUseCase {
  constructor(private locationRepository: LocationRepository){}

  async execute({provinciaId, municipioId, endereco1, candidatoId, escolaId, endereco2}: LocationDTO){
    const enderecoAlreadyExists = await this.locationRepository.findLocationByEndereco(endereco1)

    if(enderecoAlreadyExists) throw new RequestError("Este endereco já existe!")

    const provinceExists = await this.locationRepository.findProvinceById(provinciaId)
    if(!provinceExists) throw new RequestError("Provincia não encontrada", 404)
    if(municipioId){
      const countyExists = await this.locationRepository.findCountyById(municipioId);
      if(!countyExists) throw new RequestError("Muncipio não encontrado", 404)
    }
    if(escolaId){
      const escolaExists = await this.locationRepository.findSchoolById(escolaId)
      if(!escolaExists) throw new RequestError("Escola não encontrada", 404)
    }
    if(candidatoId){
      const candidateExists = await this.locationRepository.findCandidateById(candidatoId)
      if(candidateExists) throw new RequestError("candidato não encontrado", 404) 
    }

    const newLocation = await this.locationRepository.save({provinciaId, municipioId, endereco1, candidatoId, escolaId, endereco2})
    return newLocation
  }
}