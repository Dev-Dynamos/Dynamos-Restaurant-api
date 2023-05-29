import { AreaDeFormacao, Categoria } from "@prisma/client"
import QueryString from "qs";
import { ITrainingAreaDTO } from "../dtos/TrainingAreaDTO";

type queryType = string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[]

export interface IQueryParams {
  search: queryType;
  skip: queryType;
  take: queryType;
}

interface ITrainingAreasRepository {
  create(data: ITrainingAreaDTO): Promise<AreaDeFormacao>;
  find({ search, skip, take }: IQueryParams): Promise<AreaDeFormacao[]>;
  findById(id: string): Promise<AreaDeFormacao>;
  findByName(nome: string): Promise<AreaDeFormacao>;
  findCategoryById(id: string): Promise<Categoria>;
  update({ id, nome, descricao, fotoUrl }: ITrainingAreaDTO): Promise<AreaDeFormacao>;
  delete(id: string): Promise<AreaDeFormacao>;
  list(): Promise<AreaDeFormacao[]>;
}

export type { ITrainingAreasRepository };