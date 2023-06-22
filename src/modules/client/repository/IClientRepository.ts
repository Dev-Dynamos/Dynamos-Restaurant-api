import {
  CreateClientDTO,
  UpdateClientDTO,
} from "../clientDTOs/CreateClientDTO";
import { Client } from "../model/Client";

export interface IClientRepository {
  create: ({
    nome,
    email,
    password,
    telefone,
  }: CreateClientDTO) => Promise<Client>;
  get(): Promise<Client[]>;
  delete: (id: string) => Promise<Client>;
  update({
    id,
    nome,
    email,
    telefone,
    password,
  }: UpdateClientDTO): Promise<Client>;
}
