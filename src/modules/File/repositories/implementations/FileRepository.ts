import { IFileDto, IFileRepository } from "../IFileRepository";
import { prisma } from "../../../../prisma/client";
import { Ficheiro } from "@prisma/client";

export class FileRepository implements IFileRepository {

    async save({ link, nome, extensao }: IFileDto): Promise<Ficheiro> {
        const file = await prisma.ficheiro.create({
            data: {
                link,
                nome,
                extensao
            }
        })
        return file
    }

    async findById(id: string): Promise<Ficheiro> {
        const file = await prisma.ficheiro.findFirst({
            where:{
                id
            }
        })

        return file
    }

    async findByName(nome: string): Promise<Ficheiro> {
        const file = await prisma.ficheiro.findFirst({
            where:{
                nome,
            }
        })
        return file
    }

    async delete(id: string): Promise<Ficheiro> {
        const file = await prisma.ficheiro.delete({
            where:{
                id,
            }
        })
        return file
    }
}