import { Cargo, Departamento, Funcionario, Sexo } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { OfficialDTO } from "../../dtos";
import { IOfficialRepository } from "../IOfficialRepository";

export class OfficialRepository implements IOfficialRepository{
  async findById(id: string): Promise<Funcionario> {
    const official = await prisma.funcionario.findUnique({
      where: {
        id: id
      }
    })

    return official
  }

  async findByName(nome: string): Promise<Funcionario> {
    const official = await prisma.funcionario.findFirst({
      where: {
        nome: nome
      }
    })

    return official
  }

  async findByAgentNum(numero_agente: string): Promise<Funcionario> {
    const official = await prisma.funcionario.findFirst({
      where: {
        agenteN: numero_agente
      }
    })

    return official
  }

  async findRoleById(cargoId: string): Promise<Cargo> {
    const role = await prisma.cargo.findUnique({
      where: {
        id: cargoId
      }
    })

    return role
  }

  async findDepartmentById(departamentoId: string): Promise<Departamento> {
    const department = await prisma.departamento.findUnique({
      where: {
        id: departamentoId
      }
    })

    return department
  }

  async save({ nome, sexo, contatoId, cargoId, departamentoId, numero_agente }: OfficialDTO): Promise<Funcionario> {
    const official = await prisma.funcionario.create({
      data: {
        nome: nome,
        sexo: sexo,
        contatoId: contatoId,
        cargoId: cargoId,
        departamentoId: departamentoId,
        agenteN: numero_agente,
      }
    })

    return official
  }

  async validateSex(sex: string): Promise<boolean> {
    if((sex !== Sexo.M) && (sex !== Sexo.F)) {
        return false;
    }

    return true;
  }

  async delete(id: string): Promise<Funcionario> {
    const official = await prisma.funcionario.delete({
      where: {
        id: id
      }
    })

    return official
  }

  async update({ id, nome, cargoId, departamentoId, numero_agente }: OfficialDTO): Promise<Funcionario> {
    const official = await prisma.funcionario.update({
      data: {
        nome: nome,
        cargoId: cargoId,
        departamentoId: departamentoId,
        agenteN: numero_agente
      },
      where: {
        id: id
      }
    })

    return official
  }

  async getOfficials(): Promise<Funcionario[]> {
    const officials = await prisma.funcionario.findMany({
      include:{
        Cargo: true,
        Departamento: true
      }
    })

    return officials
  }
}