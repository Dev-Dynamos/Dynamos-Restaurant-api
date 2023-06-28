import { File } from "../../model/File";
import { prismaClient } from "../../../../database/prismaClient";
import { IFileRepository } from "../IFileRepository";
import { CreateFileDTO } from "../../fileDTOs/CreateFileDTO";


export class FileRepository implements IFileRepository {

    async create({ caminho, extensao, nome }: CreateFileDTO): Promise<File> {
        const file = await prismaClient.ficheiro.create({
            data: {
                caminho,
                extensao,
                nome
            }
        });

        return file;
    }

    async findById(id: string): Promise<File | null> {
        const file = await prismaClient.ficheiro.findUnique({
            where: { id }
        });

        return file;
    }

    async delete(id: string): Promise<void> {
        await prismaClient.ficheiro.delete({
            where: { id }
        });
    }
}