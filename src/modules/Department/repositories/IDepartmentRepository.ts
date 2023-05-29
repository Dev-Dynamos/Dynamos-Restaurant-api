import { Departamento, Organigrama } from "@prisma/client";
import { DepartmentDTO } from "../dtos";

export interface IDepartmentRepository {
  findById(id: string): Promise<Departamento>
  findByName(nome: string): Promise<Departamento>
  findOrganizationById(organigramaId: string): Promise<Organigrama>
  findDepartamentByOrganization(id: string): Promise<Departamento>
  save({ nome, organigramaId }): Promise<Departamento>
  delete(id: string): Promise<Departamento>
  update({ id, nome, organigramaId }: DepartmentDTO): Promise<Departamento>
  getDepartaments(): Promise<Departamento[]>
}