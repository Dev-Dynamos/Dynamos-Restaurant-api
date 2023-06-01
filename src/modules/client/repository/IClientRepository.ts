import { CreateClientDTO } from "../clientDTOs/CreateClientDTO";
import { Client } from "../model/Client";

export interface IClientRepository {
  create: ({
    nome,
    email,
    password,
    telefone,
  }: CreateClientDTO) => Promise<Client>;
}
