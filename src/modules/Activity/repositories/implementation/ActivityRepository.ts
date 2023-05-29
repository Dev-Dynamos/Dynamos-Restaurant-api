import { Actividade } from "@prisma/client";
import { ActivityDTO } from "../../dtos";
import { IActivityRepository } from "../IActivityRepository";
import { prisma } from "../../../../prisma/client";

export class ActivityRepository implements IActivityRepository{
  async findById(id: string): Promise<Actividade> {
    const activity = await prisma.actividade.findUnique({where: {
      id: id
    }})  

    return activity
  }

  async findByName(nome: string): Promise<Actividade> {
    const activity = await prisma.actividade.findFirst({
      where: {
        nome: nome
    }
  }) 

    return activity
  }

  async save({ nome, data, organizador, escolaId }: ActivityDTO): Promise<Actividade> {
    const activity = await prisma.actividade.create({data: {
      nome: nome,
      data: data,
      organizador: organizador,
      escolaId: escolaId
    }})

    return activity
  }

  async delete(id: string): Promise<Actividade> {
    const activity = await prisma.actividade.delete({where: {
      id: id
    }})  

    return activity
  }

  async update({id, nome, data, organizador}: ActivityDTO): Promise<Actividade> {
    const activity = await prisma.actividade.update({
      data: {
        nome: nome,
        data: data,
        organizador: organizador,
      },
      where: {
      id: id
    }})  

    return activity
  }

  async getActivities(): Promise<Actividade[]> {
    const activities = await prisma.actividade.findMany({
      include:{
        Escola: true,
      }
    })  

    return activities
  }
}