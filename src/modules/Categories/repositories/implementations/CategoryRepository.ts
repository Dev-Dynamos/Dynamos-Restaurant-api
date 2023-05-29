import { Categoria } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { ICategoryRepository } from "../ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
    async findById(id: string): Promise<Categoria> {
        const category = await prisma.categoria.findFirst({
            where: {
                id: id,
            }
        })

        return category
    }

    async findByName(nome: string): Promise<Categoria> {
        const category = await prisma.categoria.findFirst({
            where: {
                nome: nome
            }
        })
        return category
    }


    async save(nome: string): Promise<Categoria> {
        const category = await prisma.categoria.create({
            data: {
                nome
            }
        })
        return category
    }

    async delete(id: string): Promise<Categoria> {
        const category = await prisma.categoria.delete({
            where: {
                id: id
            }
        })
        return category
    }

    async update(nome: string, id: string): Promise<Categoria> {
        const category = await prisma.categoria.update({
            data: {
                nome,
            },
            where: {
                id: id
            }
        })
        return category
    }

    async getCategory(): Promise<Categoria[]> {
        const category = await prisma.categoria.findMany({
            include: {
                Escola: true,
                AreaDeFormacao: {
                    include: {
                        Curso: true,
                        PerfilDeSaida: true,
                    }
                },
            }
        })
        return category
    }
}                                                                   