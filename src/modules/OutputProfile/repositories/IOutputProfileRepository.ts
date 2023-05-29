import { AreaDeFormacao, PerfilDeSaida } from "@prisma/client";
import { ICreateOutputProfileDTO } from "../dtos/CreateOutputProfileDTO";
import { IUpdateOutputProfileDTO } from "../dtos/UpdateOutputProfileDTO";

export interface IOutputProfileRepository {
  create({ nome, descricao, areaDeFormacaoId, fotoUrl }: ICreateOutputProfileDTO): Promise<PerfilDeSaida>;
  findById(id: string): Promise<PerfilDeSaida>;
  findByName(nome: string): Promise<PerfilDeSaida>;
  findTrainingAreaById(id: string): Promise<AreaDeFormacao>;
  update({ nome, descricao, id }: IUpdateOutputProfileDTO): Promise<PerfilDeSaida>;
  delete(id: string): Promise<PerfilDeSaida>;
  list(): Promise<PerfilDeSaida[]>;
}