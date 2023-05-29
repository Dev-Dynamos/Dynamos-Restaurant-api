import { Municipio, Provincia } from "@prisma/client"

interface ICountyRepository {
    findById(id: string): Promise<Municipio>
    findByName(nome: string): Promise<Municipio>
    findByProvinciaId(id: string): Promise<Provincia>
    save(nome: string, provinciaId: string): Promise<Municipio>
    findCountyByProvinceId(provinceId:string): Promise<Municipio[]>
    getAllCounties():Promise<Municipio[]>
    delete(id: string): Promise<Municipio>
    update(id: string, nome: string): Promise<Municipio>
}

export type { ICountyRepository }