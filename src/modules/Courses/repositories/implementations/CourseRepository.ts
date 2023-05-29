
import { AreaDeFormacao, Curso, PerfilDeSaida } from "@prisma/client";
import { prisma } from "../../../../prisma/client"
import { ICourseDTO } from "../../dtos/CourseDTO";
import { ICourseRepository, IQueryParams } from "../ICourseRepository";

class CourseRepository implements ICourseRepository {

  async create({ nome, descricao, areaDeFormacaoId, fotoUrl }: ICourseDTO): Promise<Curso> {
    const course = await prisma.curso.create({
      data: {
        nome,
        descricao,
        areaDeFormacaoId,
        fotoUrl,
      }
    });

    return course;
  }

  async find({ search, skip, take }: IQueryParams): Promise<Curso[]> {
    const total = await prisma.curso.count();

    return await prisma.curso.findMany({
      where: {
        nome: {
          contains: String(search),
          mode: 'insensitive',
        }
      },
      include: {
        Disciplina: true
      },
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : total
    })
  }

  async findById(id: string): Promise<Curso> {
    const course = await prisma.curso.findFirst({
      where: {
        id
      },
      include: {
        Disciplina: true,
      }
    })

    return course;
  }

  async findByName(nome: string): Promise<Curso> {
    const course = await prisma.curso.findFirst({
      where: {
        nome
      }
    });

    return course;
  }

  async findTrainingAreaById(id: string): Promise<AreaDeFormacao> {
    const trainingArea = await prisma.areaDeFormacao.findFirst({
      where: {
        id
      }
    });

    return trainingArea;
  }

  async update({ id, nome, descricao, fotoUrl }: ICourseDTO): Promise<Curso> {
    const courseUpdated = await prisma.curso.update({
      data: {
        nome,
        descricao,
        fotoUrl
      },
      where: {
        id
      }
    });

    return courseUpdated;
  }

  async delete(id: string): Promise<Curso> {
    const course = await prisma.curso.delete({
      where: {
        id
      }
    });

    return course;
  }

  async list(): Promise<Curso[]> {
    const course = await prisma.curso.findMany({
      include: {
        AreaDeFormacao: true,
        Disciplina: true,
      }
    });
    return course;
  }

  async listByTrainingAreaId(areaDeFormacaoId: string): Promise<Curso[]> {
    return await prisma.curso.findMany({
      where: {
        areaDeFormacaoId
      },
      include: {
        Disciplina: true
      }
    });
  }
}

export { CourseRepository };