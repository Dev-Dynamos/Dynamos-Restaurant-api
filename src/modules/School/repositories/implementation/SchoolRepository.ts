import { AreaDeFormacao, Categoria, Curso, Escola, Inscricao, Municipio, Provincia } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { SchoolDTO } from "../../dtos";
import { ISchoolRepository } from "../ISchoolRepository";

export class SchoolRepository implements ISchoolRepository {
  async save(data: SchoolDTO): Promise<Escola> {
    const school = await prisma.escola.create({
      data: {
        nome: data.nome,
        nif: data.nif,
        logo: data.logo_url,
        categoriaId: data.categoriaId,
        fotoUrl: data.fotoUrl
      }
    })

    return school
  }

  async findById(id: string): Promise<Escola> {
    const school = await prisma.escola.findUnique({
      where: {
        id: id
      },
      include: {
        actividade: true,
        Categoria: true,
        historial: true,
        areaDeFormacao: true,
        Organigrama: {
          include: {
            Departamento: {
              include: {
                Funcionario: true
              }
            }
          }
        },
        Localizacao: {
          include: {
            Municipio: {
              include: {
                Provincia: true,
              }
            },
            Provincia: {
              include: {
                Municipio: true,
              }
            },
          }
        },
        Inscricao: true,
      }
    })

    return school
  }

  async findByName(nome: string): Promise<Escola> {
    const school = await prisma.escola.findFirst({
      where: {
        nome: nome
      }
    })

    return school
  }

  async getTrainingAreas(schoolId: string): Promise<AreaDeFormacao[]> {
    const trainingAreas = await prisma.areaDeFormacao.findMany({
      where: {
        escolaId: schoolId
      }
    })

    return trainingAreas
  }

  async getCourses(schoolId: string): Promise<Curso[]> {
    const courses = await prisma.curso.findMany({
      where: {
        AreaDeFormacao: {
          escolaId: schoolId
        }
      }
    })

    return courses
  }

  async getEnrollments(schoolId: string): Promise<Inscricao[]> {
    const enrollments = await prisma.inscricao.findMany({
      where: {
        escolaId: schoolId
      }
    })

    return enrollments
  }

  async findCategoryById(categoriaId: string): Promise<Categoria> {
    const categoria = await prisma.categoria.findUnique({
      where: {
        id: categoriaId
      }
    })

    return categoria
  }

  async findProvinceById(provinceId: string): Promise<Provincia> {
    const province = await prisma.provincia.findUnique({
      where: {
        id: provinceId
      }
    })

    return province
  }

  async findCountyById(countyId: string): Promise<Municipio> {
    const county = await prisma.municipio.findUnique({
      where: {
        id: countyId
      }
    })

    return county;
  }

  async update(data: SchoolDTO): Promise<Escola> {
    const school = await prisma.escola.update({
      data: {
        nome: data.nome,
        nif: data.nif,
        logo: data.logo_url,
        categoriaId: data.categoriaId,
        fotoUrl: data.fotoUrl
      },
      where: {
        id: data.id
      }
    })

    return school
  }

  async delete(id: string): Promise<Escola> {
    const school = await prisma.escola.delete({
      where: {
        id: id
      }
    })

    return school
  }

  async getSchools(): Promise<Escola[]> {
    const schools = await prisma.escola.findMany({
      include: {
        actividade: true,
        Categoria: true,
        historial: true,
        areaDeFormacao: true,
        Organigrama: {
          include: {
            Departamento: {
              include: {
                Funcionario: true
              }
            }
          }
        },
        Localizacao: {
          include: {
            Municipio: {
              include: {
                Provincia: true,
              }
            },
            Provincia: {
              include: {
                Municipio: true,
              }
            },
          }
        },
        Inscricao: true,
      }
    })

    return schools
  }

  async filterSchoolByName(nome: string, take?: number, skip?: number): Promise<Escola[]> {
    const school = await prisma.escola.findMany({
      where: {
        nome: {
          contains: nome,
          mode: 'insensitive'
        }
      },
      take: take || await prisma.escola.count(),
      skip: skip || 0
    })

    return school
  }

  async filterSchoolByProvince(provinciaId: string): Promise<Escola[]> {
    const schools = await prisma.escola.findMany({
      where: {
        Localizacao: {
          provinciaId: provinciaId
        },
      },
      include: {
        areaDeFormacao: true,
        actividade: true,
        Categoria: true,
        historial: true,
        Localizacao: true,
        Inscricao: true,
      }
    })

    return schools
  }

  async filterSchoolByCategory(categoriaId: string): Promise<Escola[]> {
    const schools = await prisma.escola.findMany({
      where: {
        categoriaId: categoriaId
      },
      include: {
        actividade: true,
        Categoria: true,
        historial: true,
        Localizacao: true,
        Inscricao: true,
      }
    })

    return schools
  }

  async filterSchoolByCounty(municipioId: string): Promise<Escola[]> {
    const schools = await prisma.escola.findMany({
      where: {
        Localizacao: {
          municipioId: municipioId
        },
      },
      include: {
        actividade: true,
        Categoria: true,
        historial: true,
        Localizacao: true,
        Inscricao: true,
      }
    })

    return schools
  }
}