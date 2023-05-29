import { Departamento, Organigrama } from '.prisma/client'
import { DepartmentDTO } from '../../dtos';
import { IDepartmentRepository } from '../IDepartmentRepository'
import { prisma } from '../../../../prisma/client'

export class DepartmentRepository implements IDepartmentRepository {
  async findById(id: string): Promise<Departamento> {
    const department = await prisma.departamento.findUnique({
      where: {
        id: id
      },
      include:{
        Funcionario: true,
        Organigrama: true
      }
    })  

    return department
  }

  async findByName(nome: string): Promise<Departamento> {
    const department = await prisma.departamento.findFirst({
      where: {
        nome: nome
      }
    })  

    return department
  }

  async findDepartamentByOrganization(id: string): Promise<Departamento> {
    const organization = await prisma.departamento.findFirst({
      where: {
        organigramaId : id
      }
    })  

    return organization
  }

  
  async findOrganizationById(organigramaId: string): Promise<Organigrama> {
    const organization = await prisma.organigrama.findFirst({
      where: {
        id: organigramaId
      }, 
      include: {
        Departamento: true,
      }
    })

    return organization
  }

  async save({ nome, organigramaId }: { nome: any; organigramaId: any }): Promise<Departamento> {
    const department = await prisma.departamento.create({
      data: {
        nome: nome,
        organigramaId: organigramaId
      }
    })

    return department
  }
  
  async delete(id: string): Promise<Departamento> {
    const department = await prisma.departamento.delete({
      where: {
        id: id
      }
    })  

    return department
  }

  async update({ id, nome, organigramaId }: DepartmentDTO): Promise<Departamento> {
    const department = await prisma.departamento.update({
      data: {
        nome: nome,
        organigramaId: organigramaId
      },
      where: {
        id: id
      }
    })  

    return department
  }

  async getDepartaments(): Promise<Departamento[]> {
    const department = await prisma.departamento.findMany({
      include:{
        Funcionario: true,
        Organigrama: {
          include:{
            Escola: true,
          }
        }
      }
    })  

    return department
  }
}