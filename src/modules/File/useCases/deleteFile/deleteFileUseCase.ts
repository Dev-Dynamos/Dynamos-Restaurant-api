import { Ficheiro } from "@prisma/client";
import { RequestError } from "../../../../typeErrors/error-api";
import { S3Storage } from "../../../../utils/S3Storage";
import { FileRepository } from "../../repositories/implementations/FileRepository";



export class DeleteFileUseCase {
    constructor(private fileRepository: FileRepository){}

    async execute(id: string): Promise<Ficheiro>{
        const fileExists = await this.fileRepository.findById(id)
        
        if(!fileExists){
            throw new RequestError("Ficheiro não encontrado", 404)
        }

        const s3Storage = new S3Storage();
        
        await s3Storage.deleteFile(fileExists.nome)
        const file = await this.fileRepository.delete(id)
        return file
    }
}