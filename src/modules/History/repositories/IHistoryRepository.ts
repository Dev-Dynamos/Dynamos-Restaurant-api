import { Historial, Escola } from "@prisma/client";
import { HistoryDTO } from "../dtos";

export interface IHistoryRepository {
  findById(id: string): Promise<Historial>
  findSchoolById(escolaId: string): Promise<Escola>
  findBySchoolId(escolaId: string): Promise<Historial>
  save({descricao, fundador, escolaId}: HistoryDTO): Promise<Historial>
  delete(id: string): Promise<Historial>
  update({id, descricao, fundador}: HistoryDTO): Promise<Historial>
}