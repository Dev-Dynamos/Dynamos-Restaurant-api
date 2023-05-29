import { AreaDeFormacao, PerfilDeSaida } from "@prisma/client";
import { ICreateOutputProfileDTO } from "../../dtos/CreateOutputProfileDTO";
import { IOutputProfileRepository } from "../IOutputProfileRepository";
import { prisma } from "../../../../prisma/client"
import { IUpdateOutputProfileDTO } from "../../dtos/UpdateOutputProfileDTO";

class OutputProfileRepository implements IOutputProfileRepository {

  async create({ nome, descricao, areaDeFormacaoId, fotoUrl }: ICreateOutputProfileDTO): Promise<PerfilDeSaida> {
    const outputProfile = await prisma.perfilDeSaida.create({
      data: {
        nome,
        descricao,
        areaDeFormacaoId,
        fotoUrl
      }
    });

    return outputProfile;
  }

  async findById(id: string): Promise<PerfilDeSaida> {
    const outputProfile = await prisma.perfilDeSaida.findFirst({
      where: {
        id
      },
      include: {
        AreaDeFormacao: true
      }
    })

    return outputProfile;
  }

  async findByName(nome: string): Promise<PerfilDeSaida> {
    const outputProfile = await prisma.perfilDeSaida.findFirst({
      where: {
        nome
      }
    });

    return outputProfile;
  }

  async findTrainingAreaById(id: string): Promise<AreaDeFormacao> {
    const trainingArea = await prisma.areaDeFormacao.findFirst({
      where: {
        id
      }
    });

    return trainingArea;
  }

  async update({ nome, descricao, id, fotoUrl }: IUpdateOutputProfileDTO): Promise<PerfilDeSaida> {
    const outputProfileUpdated = await prisma.perfilDeSaida.update({
      data: {
        nome,
        descricao,
        fotoUrl
      },
      where: {
        id
      }
    });

    return outputProfileUpdated;
  }

  async delete(id: string): Promise<PerfilDeSaida> {
    const outputProfile = await prisma.perfilDeSaida.delete({
      where: {
        id
      }
    });

    return outputProfile;
  }

  async list(): Promise<PerfilDeSaida[]> {
    const outputProfiles = await prisma.perfilDeSaida.findMany({
      include: {
        AreaDeFormacao: true
      }
    });
    return outputProfiles;
  }
}

export { OutputProfileRepository };