import { Escola, Provincia, TipoUsuario, Usuario } from "@prisma/client";
import { UserDTO } from "../../dtos";
import { IUserRepository } from "../IUserRepository";
import { prisma } from "../../../../prisma/client";

export class UserRepository implements IUserRepository {

  async findById(id: string): Promise<Usuario> {
    const user = await prisma.usuario.findFirst({
      where: {
        id: id
      },
      include: {
        Escola: {
          include: {
            actividade: true,
            areaDeFormacao: true,
            Categoria: true,
            historial: true,
            Localizacao: true,
            Inscricao: true,
            Organigrama: {
              include: {
                Departamento: true
              }
            }
          }
        },
        Provincia: true,

      }
    }
    )

    return user
  }


  async findByEmail(email: string): Promise<Usuario> {
    const user = await prisma.usuario.findFirst({
      where: {
        email: email
      },
      include: {
        Escola: {
          include: {
            areaDeFormacao: {
              include: {
                Curso: {
                  include: {
                    AreaDeFormacao: true
                  }
                },
                PerfilDeSaida: true,
                Categoria: true
              }
            },


          }
        },
        Provincia: true,
      }
    }
    )

    return user
  }

  async findProvinceById(id: string): Promise<Usuario> {
    const province = await prisma.usuario.findFirst({
      where: {
        provinciaId: id
      },
    }
    )
    return province
  }

  async findProvince(id: string): Promise<Provincia> {
    const province = await prisma.provincia.findFirst({
      where: {
        id: id
      },
    }
    )
    return province
  }

  async findSchool(id: string): Promise<Escola> {
    const school = await prisma.escola.findFirst({
      where: {
        id: id
      },
    }
    )
    return school
  }



  async findSchoolById(id: string): Promise<Usuario> {
    const school = await prisma.usuario.findFirst({
      where: {
        escolaId: id
      }
    }
    )
    return school
  }

  async findByName(nome: string): Promise<Usuario> {
    const user = await prisma.usuario.findFirst({
      where: {
        nome: nome
      }
    })
    return user
  }

  async save(data: UserDTO): Promise<Usuario> {
    const user = await prisma.usuario.create(
      {
        data: {
          email: data.email,
          fotoUrl: data.fotoUrl,
          nome: data.nome,
          senha: data.senha,
          escolaId: data.escolaId,
          provinciaId: data.provinciaId,
          tipoUsuario: data.tipoUsuario,
        }
      })

    return user
  }

  async delete(id: string): Promise<Usuario> {
    const user = await prisma.usuario.delete(
      {
        where: {
          id: id
        }
      })
    return user
  }

  async update(data: UserDTO, id: string): Promise<Usuario> {
    const user = await prisma.usuario.update({
      data: {
        email: data.email,
        fotoUrl: data.fotoUrl,
        senha: data.senha
      },
      where: {
        id: id
      }
    }
    )
    return user
  }

  async getUsers(): Promise<Usuario[]> {
    const user = await prisma.usuario.findMany(
      {
        include: {
          Escola: true,
          Provincia: true,
        }
      }
    )


    return user
  }
}