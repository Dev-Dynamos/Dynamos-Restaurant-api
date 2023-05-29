import { Ficheiro } from "@prisma/client";
import { RequestError } from "../../../../../src//typeErrors/error-api";
import { FileRepository } from "../../repositories/implementations/FileRepository";


export class GetFileUseCase {
    constructor(private fileRepository: FileRepository) { }

    async execute(id: string): Promise<Ficheiro> {
        const file = await this.fileRepository.findById(id)
        if (!file) throw new RequestError("ficheiro não encontrado", 404)

        return file
    }
}