import { AreaDeFormacao, Curso } from "@prisma/client";
import { ICourseDTO } from "../dtos/CourseDTO";

import QueryString from "qs";

type queryType = string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[]

export interface IQueryParams {
  search: queryType;
  skip: queryType;
  take: queryType;
}

export interface ICourseRepository {
  create({ nome, descricao, areaDeFormacaoId, fotoUrl }: ICourseDTO): Promise<Curso>;
  find({ search, skip, take }: IQueryParams): Promise<Curso[]>
  findById(id: string): Promise<Curso>;
  findByName(nome: string): Promise<Curso>;
  findTrainingAreaById(id: string): Promise<AreaDeFormacao>;
  update({ id, nome, descricao, fotoUrl }: ICourseDTO): Promise<Curso>;
  delete(id: string): Promise<Curso>;
  list(): Promise<Curso[]>;
  listByTrainingAreaId(areaDeFormacaoId: string): Promise<Curso[]>;

}