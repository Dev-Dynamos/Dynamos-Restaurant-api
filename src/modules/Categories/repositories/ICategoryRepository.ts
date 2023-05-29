import { Categoria } from "@prisma/client"

interface ICategoryRepository {
    findById: (id: string) => Promise<Categoria>
    findByName: (nome: string) => Promise<Categoria>
    save: (nome: string) => Promise<Categoria>
    delete: (id: string) => Promise<Categoria>
    update: (name: string, id: string) => Promise<Categoria>
    getCategory: () => Promise<Categoria[]>
}

export type { ICategoryRepository }