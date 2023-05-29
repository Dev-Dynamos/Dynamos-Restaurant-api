import { Ficheiro } from "@prisma/client"

export interface IFileDto {
    link: string;
    nome: string;
    extensao: string;
}

interface IFileRepository {
    save({link, nome, extensao}: IFileDto): Promise<Ficheiro>
    findById(id: string): Promise<Ficheiro>
    findByName(nome: string): Promise<Ficheiro>
    delete(id: string): Promise<Ficheiro>
}

export type {IFileRepository}