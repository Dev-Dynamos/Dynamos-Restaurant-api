import { CreateFileDTO } from "../fileDTOs/CreateFileDTO";
import { File } from "../model/File";
import { IFileRepository } from "../repositories/IFileRepository";


class CreateFileUseCase {
    constructor(
        private fileRepository: IFileRepository
    ) { }

    async execute({ caminho, extensao, nome }: CreateFileDTO): Promise<File> {
        const file = await this.fileRepository.create({ caminho, extensao, nome });

        return file;
    }
}

export { CreateFileUseCase };