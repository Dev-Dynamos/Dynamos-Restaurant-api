import { AppError } from "../../../../error/AppError";
import { S3Storage } from "../../../../utils/S3Storage";
import { IFileRepository } from "../../repositories/IFileRepository";


export class DeleteFileUseCase {
    constructor(public fileRepository: IFileRepository) { }

    async execute(id: string): Promise<void> {

        const fileExists = await this.fileRepository.findById(id);

        if (!fileExists)
            throw new AppError("Ficheiro não encontrado", 404);

        const s3Storage = new S3Storage();

        await s3Storage.deleteFile(fileExists.name);

        await this.fileRepository.delete(id);
    }
}