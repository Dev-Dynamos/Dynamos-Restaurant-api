import { prisma } from '../../../../prisma/client'
import { Curso, Disciplina } from "@prisma/client";
import { ICreateSchoolSubjectDTO } from "../../dtos/CreateSchoolSubjectDTO";
import { ISchoolSubjectRepository } from "../ISchoolSubjectRepository";
import { IUpdateSchoolSubjectDTO } from '../../dtos/UpdateSchoolSubjectDTO';


class SchoolSubjectRepository implements ISchoolSubjectRepository {
  async create({ nome, descricao, cursoId }: ICreateSchoolSubjectDTO): Promise<Disciplina> {
    const schoolSubject = await prisma.disciplina.create({
      data: {
        nome,
        descricao,
        cursoId
      }
    });

    return schoolSubject;
  }

  async findById(id: string): Promise<Disciplina> {
    const schoolSubject = await prisma.disciplina.findFirst({
      where: {
        id
      },
      include: {
        Curso: {
          include: {
            AreaDeFormacao: true,
          }
        }
      }
    });

    return schoolSubject;
  }

  async findByName(nome: string): Promise<Disciplina> {
    const schoolSubject = await prisma.disciplina.findFirst({
      where: {
        nome
      }
    });

    return schoolSubject;
  }

  async findCourseById(id: string): Promise<Curso> {
    const course = await prisma.curso.findFirst({
      where: {
        id
      }
    });

    return course;
  }

  async update({ nome, descricao, id }: IUpdateSchoolSubjectDTO): Promise<Disciplina> {
    const schoolSubjectUpdated = await prisma.disciplina.update({
      where: {
        id
      },
      data: {
        nome,
        descricao
      }
    });

    return schoolSubjectUpdated;
  }

  async delete(id: string): Promise<Disciplina> {
    const schoolSubjectDeletedOne = await prisma.disciplina.delete({
      where: {
        id
      }
    });

    return schoolSubjectDeletedOne;
  }

  async list(): Promise<Disciplina[]> {
    return await prisma.disciplina.findMany({
      include: {
        Curso: true
      }
    });
  }
}

export { SchoolSubjectRepository };