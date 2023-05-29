import { Escola, Organigrama } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { OrganizationDTO } from "../../dtos";
import { IOrganizationRepository } from "../IOrganizationRepository";

export class OrganizationRepository implements IOrganizationRepository{
  async findById(id: string): Promise<Organigrama> {
    const organization = await prisma.organigrama.findUnique({
      where: {
        id: id
      },
      include:{
        Departamento: true
      }
    })

    return organization
  }

  async findBySchoolId(escolaId: string): Promise<Organigrama> {
    const organization = await prisma.organigrama.findFirst({
      where: {
        escolaId: escolaId
      }
    })

    return organization
  }

  async findSchoolById(escolaId: string): Promise<Escola> {
    const school = await prisma.escola.findUnique({
      where: {
        id: escolaId
      }
    })

    return school
  }

  async save({ escolaId }: OrganizationDTO): Promise<Organigrama> {
    const organization = await prisma.organigrama.create({
      data: {
        escolaId: escolaId
      }
    })

    return organization
  }

  async delete(id: string): Promise<Organigrama> {
    const organization = await prisma.organigrama.delete({
      where: {
        id: id
      }
    })

    return organization
  }

  async update({ id, escolaId }: OrganizationDTO): Promise<Organigrama> {
    const organization = await prisma.organigrama.update({
      data: {
        escolaId: escolaId
      },
      where: {
        id: id
      }
    })

    return organization
  }

  async getOrganizations(): Promise<Organigrama[]> {
    const organizations = await prisma.organigrama.findMany(
      {
        include:{
          Departamento: true,
        }
      }
    )

    return organizations
  }
}