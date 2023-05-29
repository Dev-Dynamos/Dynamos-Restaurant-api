import { Actividade } from "@prisma/client";
import { ActivityDTO } from "../dtos";

export interface IActivityRepository {
  findById(id: string): Promise<Actividade>
  findByName(nome: string): Promise<Actividade>
  save({nome, data, organizador, escolaId}: ActivityDTO): Promise<Actividade>
  delete(id: string): Promise<Actividade>
  update({id, nome, data, organizador, escolaId}: ActivityDTO): Promise<Actividade>
  getActivities(): Promise<Actividade[]>
}