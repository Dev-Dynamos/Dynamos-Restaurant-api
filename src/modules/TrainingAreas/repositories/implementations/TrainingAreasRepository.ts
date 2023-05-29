import { AreaDeFormacao, Categoria } from '@prisma/client';
import { IQueryParams, ITrainingAreasRepository } from '../ITrainingAreasRepository';
import { prisma } from '../../../../prisma/client';
import { ITrainingAreaDTO } from '../../dtos/TrainingAreaDTO';

class TrainingAreasRepository implements ITrainingAreasRepository {
  async create(data: ITrainingAreaDTO): Promise<AreaDeFormacao> {
    const trainingArea = await prisma.areaDeFormacao.create({
      data: {
        nome: data.nome,
        categoriaId: data.categoriaId,
        descricao: data.descricao,
        fotoUrl: data.fotoUrl,
        escolaId: data.escolaId,
      },
    })

    return trainingArea;
  }

  async find({ search, skip, take }: IQueryParams): Promise<AreaDeFormacao[]> {
    const total = await prisma.areaDeFormacao.count();

    return await prisma.areaDeFormacao.findMany({
      where: {
        nome: {
          contains: String(search),
          mode: 'insensitive',
        }
      },
      include: {
        Curso: {
          include: {
            Disciplina: true
          }
        }
      },
      skip: skip ? Number(skip) : 0,
      take: take ? Number(take) : total
    })
  }

  async findById(id: string): Promise<AreaDeFormacao> {
    const trainingArea = await prisma.areaDeFormacao.findUnique({
      where: {
        id
      },
      include: {
        Categoria: true,
        Curso: {
          include: {
            Disciplina: true,
          }
        },
        PerfilDeSaida: true
      }
    });

    return trainingArea;
  }

  async findByName(nome: string): Promise<AreaDeFormacao> {
    const trainingArea = await prisma.areaDeFormacao.findFirst({
      where: {
        nome
      }
    });

    return trainingArea;
  }

  async findCategoryById(categoryId: string): Promise<Categoria> {
    const category = await prisma.categoria.findFirst({
      where: {
        id: categoryId
      }
    })

    return category;
  }

  async update({ id, nome, descricao, fotoUrl }: ITrainingAreaDTO): Promise<AreaDeFormacao> {
    const trainingArea = await prisma.areaDeFormacao.update({
      data: {
        nome,
        descricao,
        fotoUrl
      },
      where: {
        id
      }
    })

    return trainingArea;
  }

  async delete(id: string): Promise<AreaDeFormacao> {
    const trainingArea = await prisma.areaDeFormacao.delete({
      where: {
        id
      }
    });

    return trainingArea;
  }

  async list(): Promise<AreaDeFormacao[]> {
    return await prisma.areaDeFormacao.findMany({
      include: {
        Categoria: true,
        Curso: {
          include: {
            Disciplina: true,
          }
        },
        PerfilDeSaida: true,
      }
    });
  }
}

export { TrainingAreasRepository };