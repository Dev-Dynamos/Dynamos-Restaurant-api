import { Candidato, Escola, Localizacao, Municipio, Provincia } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { LocationDTO } from "../../dtos";
import { ILocationRepository } from "../ILocationRepository";

export class LocationRepository implements ILocationRepository{
  async findById(id: string): Promise<Localizacao> {
    const location = await prisma.localizacao.findFirst({
      where: {
        id: id
      }
    })

    return location
  }

  async findLocationByEndereco(endereco1: string): Promise<Localizacao> {
    const location = await prisma.localizacao.findFirst({
      where:{
        endereco1
      }
    })
    return location
  }
  
  async findSchoolById(escolaId: string): Promise<Escola> {
    const escola = await prisma.escola.findFirst({
      where: {
        id: escolaId
      }
    })
    return escola
  }

  async findCandidateById(candidatoId: string): Promise<Candidato> {
    const candidato = await prisma.candidato.findFirst({
      where:{
        id: candidatoId
      }
    })
    return candidato
  }

  async findProvinceById(provinciaId: string): Promise<Provincia> {
    const province = await prisma.provincia.findUnique({
      where: {
        id: provinciaId
      }
    })

    return province
  }

  async findCountyById(municipioId: string): Promise<Municipio> {
    const municipio = await prisma.municipio.findFirst({
      where: {
        id: municipioId
      }
    })
    return municipio
  }

  async findCountyAtProvince(provinciaId: string): Promise<Municipio> {
    const municipios = await prisma.municipio.findFirst({
      where: {
        provinciaId: provinciaId
      }
    })
    return municipios
  }

  async save({endereco1, provinciaId, candidatoId, escolaId, endereco2, municipioId}: LocationDTO): Promise<Localizacao> {
    const location = await prisma.localizacao.create({
      data: {
        endereco1,
        candidatoId,
        endereco2,
        escolaId,
        municipioId,
        provinciaId,
      },
    })
    return location 
  }

  async delete(id: string): Promise<Localizacao> {
    const location = await prisma.localizacao.delete({
      where: {
        id: id
      }
    })

    return location
  }

  async update({ id, provinciaId, municipioId, endereco1, endereco2 }: LocationDTO): Promise<Localizacao> {
    const location = await prisma.localizacao.update({
      data: {
        provinciaId: provinciaId,
        municipioId: municipioId,
        endereco1: endereco1,
        endereco2: endereco2,
      },
      where: {
        id: id
      }
    })

    return location 
  }

  async getLocations(): Promise<Localizacao[]> {
    const locations = await prisma.localizacao.findMany({
      include:{
        Candidato: true,
        Escola: true,
        Municipio: true,
        Provincia: true,
      }
    })

    return locations
  }
}