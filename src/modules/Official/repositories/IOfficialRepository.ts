import { Cargo, Departamento, Funcionario } from "@prisma/client"
import { OfficialDTO } from "../dtos"

export interface IOfficialRepository {
  findById(id: string): Promise<Funcionario>
  findByName(nome: string): Promise<Funcionario>
  findByAgentNum(numero_agente: string): Promise<Funcionario>
  findRoleById(cargoId: string): Promise<Cargo>
  findDepartmentById(departamentoId: string): Promise<Departamento>
  save({ nome, contatoId, cargoId, departamentoId, numero_agente }: OfficialDTO): Promise<Funcionario>
  validateSex(sex: string): Promise<boolean>
  delete(id: string): Promise<Funcionario>
  update({id, nome, cargoId, departamentoId, numero_agente}: OfficialDTO): Promise<Funcionario>
  getOfficials(): Promise<Funcionario[]>
}