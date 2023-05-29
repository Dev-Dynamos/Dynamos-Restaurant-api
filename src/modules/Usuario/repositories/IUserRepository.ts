import { Escola, Provincia, TipoUsuario, Usuario } from "@prisma/client";
import { UserDTO } from "../dtos";

export interface IUserRepository {
  findById(id: string): Promise<Usuario>
  findProvinceById(id: string): Promise<Usuario>
  findProvince(id: string): Promise<Provincia>
  findSchool(id: string): Promise<Escola>
  findByEmail(email: string): Promise<Usuario>
  findSchoolById(id: string): Promise<Usuario>
  findByName(nome: string): Promise<Usuario>
  save({ nome, email, senha, escolaId, provinciaId, tipoUsuario }: UserDTO): Promise<Usuario>
  delete(id: string): Promise<Usuario>
  update({ nome, email, senha, escolaId, provinciaId, tipoUsuario }: UserDTO, id: string): Promise<Usuario>
  getUsers(): Promise<Usuario[]>
}