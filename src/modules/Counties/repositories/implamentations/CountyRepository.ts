import { Municipio, Provincia } from "@prisma/client";
import { ICountyRepository } from "../ICountyRepository";
import { prisma } from "../../../../prisma/client"

export class CountyRepository implements ICountyRepository{

    async findById(id: string): Promise<Municipio> {
        const county = await prisma.municipio.findFirst({
            where:{
                id: id,
            }
        }) 
        return county
    }
    async findCountyByProvinceId(provinceId): Promise<Municipio[]> {
        const county = await prisma.municipio.findMany({   
            where:{
                provinciaId: provinceId,
            }
        })
        return county
    }
    async findByProvinciaId(provinciaId: string): Promise<Provincia> {
        const province = await prisma.provincia.findFirst({
            where: {
                id: provinciaId, 
            }
        })
        return province
    }

    async findByName(nome: string): Promise<Municipio> {
        const county = await prisma.municipio.findFirst({
            where:{
                nome: nome,
            }
        })
        return county
    }

    async save(nome: string, provinciaId: string): Promise<Municipio> {
        const county = await prisma.municipio.create({
            data: {
                nome,
                provinciaId
            }
        })
        return county
    }

    async delete(id: string): Promise<Municipio> {
        const county = await prisma.municipio.delete({
            where:{
                id: id,
            }
        })
        return county
    }

    async update(id: string, nome: string): Promise<Municipio> {
        const county = await prisma.municipio.update({
            data:{
                nome
            },
            where:{
                id: id,
            }
        })
        return county
    }
    
    async getAllCounties(): Promise<Municipio[]> {
        const county = await prisma.municipio.findMany({
            include:{
                Comuna: true,
                Provincia: true,
            }
        })
        return county
    }
}