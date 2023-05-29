import { Cargo } from "@prisma/client"
import { RoleDTO } from "../dtos"

export interface IRoleRepository {
  findById(id: string): Promise<Cargo>
  findByName(nome: string): Promise<Cargo>
  save({ nome }: RoleDTO): Promise<Cargo>
  delete(id: string): Promise<Cargo>
  update({ id, nome }: RoleDTO): Promise<Cargo>
  getRoles(): Promise<Cargo[]>
}