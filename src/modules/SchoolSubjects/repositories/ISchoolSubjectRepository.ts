import { Curso, Disciplina } from "@prisma/client";
import { ICreateSchoolSubjectDTO } from "../dtos/CreateSchoolSubjectDTO";
import { IUpdateSchoolSubjectDTO } from "../dtos/UpdateSchoolSubjectDTO";

export interface ISchoolSubjectRepository {
  create({ nome, descricao, cursoId }: ICreateSchoolSubjectDTO): Promise<Disciplina>;
  findById(id: string): Promise<Disciplina>;
  findByName(nome: string): Promise<Disciplina>;
  findCourseById(id: string): Promise<Curso>;
  update({ nome, descricao, id }: IUpdateSchoolSubjectDTO): Promise<Disciplina>;
  delete(id: string): Promise<Disciplina>;
  list(): Promise<Disciplina[]>;
}