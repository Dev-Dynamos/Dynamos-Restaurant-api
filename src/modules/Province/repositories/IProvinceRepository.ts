import { Provincia } from "@prisma/client";
import { ProvinceDTO } from "../dtos";


export interface IProvinceRepository {
  findById(id: string): Promise<Provincia>
  findByName(nome: string): Promise<Provincia>
  save({ nome }: ProvinceDTO): Promise<Provincia>
  delete(id: string): Promise<Provincia>
  update({ id, nome}: ProvinceDTO): Promise<Provincia>
  getProvinces(): Promise<Provincia[]>
}