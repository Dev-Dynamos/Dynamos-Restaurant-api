import { Cliente } from "@prisma/client";
import {
  CreateClientDTO,
  UpdateClientDTO,
} from "../clientDTOs/CreateClientDTO";

export interface IClientRepository {
  create: ({
    nome,
    email,
    password,
    telefone,
  }: CreateClientDTO) => Promise<Cliente>;
  get(): Promise<Cliente[]>;
  delete: (id: string) => Promise<Cliente | null>;
  update({
    id,
    nome,
    email,
    telefone,
    password,
  }: UpdateClientDTO): Promise<Cliente | null>;
  findById: (id: string) => Promise<Cliente | null>;
  findByEmail: (email: string) => Promise<Cliente | null>;
}
