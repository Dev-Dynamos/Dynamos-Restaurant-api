import { RequestError } from "../../../../typeErrors/error-api";
import { IFileDto } from "../../repositories/IFileRepository";
import { FileRepository } from "../../repositories/implementations/FileRepository";



export class CreateFileUseCase {
    constructor(private fileRepository: FileRepository){}

    async execute({ link, nome, extensao }: IFileDto){
        const fileAlreadyExists = await this.fileRepository.findByName(nome);
        if(fileAlreadyExists){
            throw new RequestError("Este ficheiro já existe", 400)
        }
        const file = await this.fileRepository.save({link, nome, extensao})
        return file
    }
}