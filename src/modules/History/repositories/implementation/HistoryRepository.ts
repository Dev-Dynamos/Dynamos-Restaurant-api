import { Historial, Escola } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { HistoryDTO } from "../../dtos";
import { IHistoryRepository } from "../IHistoryRepository";

export class HistoryRepository implements IHistoryRepository {
  async findById(id: string): Promise<Historial> {
    const history = await prisma.historial.findUnique({ where: { id: id } })

    return history
  }

  async findSchoolById(escolaId: string): Promise<Escola> {
    const school = await prisma.escola.findUnique({
      where: {
        id: escolaId
      }
    })

    return school
  }

  async findBySchoolId(escolaId: string): Promise<Historial> {
    const history = await prisma.historial.findUnique({
      where: {
        escolaId: escolaId
      }
    })

    return history
  }

  async save({ descricao, fundador, escolaId, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 }: HistoryDTO): Promise<Historial> {
    const history = await prisma.historial.create({
      data: {
        descricao: descricao,
        fundador: fundador,
        escolaId: escolaId,
        fotoUrl: fotoUrl,
        fotoUrl2: fotoUrl2,
        fotoUrl3: fotoUrl3,
        fotoUrl4: fotoUrl4,
      }
    })

    return history
  }

  async delete(id: string): Promise<Historial> {
    const history = await prisma.historial.delete({ where: { id: id } })

    return history
  }

  async update({ id, descricao, fundador, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 }: HistoryDTO): Promise<Historial> {
    const history = await prisma.historial.update({
      data: {
        descricao: descricao,
        fundador: fundador,
        fotoUrl: fotoUrl,
        fotoUrl2: fotoUrl2,
        fotoUrl3: fotoUrl3,
        fotoUrl4: fotoUrl4,
      },
      where: {
        id: id
      }
    })

    return history
  }

}