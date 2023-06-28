import { CreateFileDTO } from "../fileDTOs/CreateFileDTO";
import { File } from "../model/File";

interface IFileRepository {
    create({ nome, caminho, extensao }: CreateFileDTO): Promise<File>;
    findById(id: string): Promise<File | null>;
    delete(id: string): Promise<void>;
}

export { IFileRepository }