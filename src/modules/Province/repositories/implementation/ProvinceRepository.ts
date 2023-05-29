import { Provincia } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { ProvinceDTO } from "../../dtos";
import { IProvinceRepository } from "../IProvinceRepository";

export class ProvinceRepository implements IProvinceRepository {
  
  async findById(id: string): Promise<Provincia> {
    const province = await prisma.provincia.findUnique({ 
      where: { 
        id: id
      } 
    })

    return province
  }

  async findByName(nome: string): Promise<Provincia> {
    const province = await prisma.provincia.findFirst({ 
      where: { 
        nome: nome 
    } 
  })

    return province
  }

  async save({ nome }: ProvinceDTO): Promise<Provincia> {
    const province = await prisma.provincia.create({ 
      data: {
        nome: nome
      } 
    })

    return province
  }
  
  async delete(id: string): Promise<Provincia> {
    const province = await prisma.provincia.delete({ 
      where: { 
        id: id 
      } 
    })

    return province
  }

  async update({ id, nome }: ProvinceDTO): Promise<Provincia> {
    const province = await prisma.provincia.update({ 
      data: {
        nome: nome
      }, 
      where: { 
        id: id 
      } 
    })

    return province
  }

  async getProvinces(): Promise<Provincia[]> {
    const province = await prisma.provincia.findMany()
    return province;
  }
}