import { Escola, Organigrama } from "@prisma/client";
import { OrganizationDTO } from "../dtos";

export interface IOrganizationRepository {
  findById(id: string): Promise<Organigrama>
  findBySchoolId(escolaId: string): Promise<Organigrama>
  findSchoolById(escolaId: string): Promise<Escola>
  save({ escolaId }: OrganizationDTO): Promise<Organigrama>
  delete(id: string): Promise<Organigrama>
  update({ id, escolaId }: OrganizationDTO): Promise<Organigrama>
  getOrganizations(): Promise<Organigrama[]>
}