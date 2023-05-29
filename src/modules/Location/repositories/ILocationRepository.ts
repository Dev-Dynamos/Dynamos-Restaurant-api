import { Candidato, Escola, Localizacao, Municipio, Provincia } from "@prisma/client";
import { LocationDTO } from "../dtos";

export interface ILocationRepository {
  findById(id: string): Promise<Localizacao>
  findProvinceById(provinciaId: string): Promise<Provincia>
  findCountyById(municipioId: string): Promise<Municipio>
  findSchoolById(escolaId: string): Promise<Escola>
  findCandidateById(candidatoId: string): Promise<Candidato>
  findLocationByEndereco(endereco1: string): Promise<Localizacao>
  findCountyAtProvince(provinciaId, municipioId): Promise<Municipio>
  save(data: LocationDTO): Promise<Localizacao>
  delete(id: string): Promise<Localizacao>
  update({id, provinciaId, municipioId, endereco1, endereco2}: LocationDTO): Promise<Localizacao>
  getLocations(): Promise<Localizacao[]>
}