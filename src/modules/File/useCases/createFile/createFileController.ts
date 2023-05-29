import { Request, Response } from "express";
import { CreateFileUseCase } from "./createFileUseCase";
import * as yup from "yup"
import { RequestError } from "../../../../typeErrors/error-api";
import { S3Storage } from "../../../../utils/S3Storage";


export class CreateFileController {
    constructor(private createFileUseCase: CreateFileUseCase){}

    async handle(req:Request, res:Response): Promise<Response>{
        const schema = yup.object().shape({
            filename: yup.string().required()
        })

        const { filename } = req.file;

        if((
            !(await schema.isValid({
                filename
            }))
        )){
            throw new RequestError("Erro na validação. Verifique os dados!", 400)
        }

        const s3Storage = new S3Storage();

        await s3Storage.saveFile(filename)

        const file = await this.createFileUseCase.execute({
            link: `https://uploads-file-portal-das-escolas.s3.amazonaws.com/${filename}`,
            nome: filename,
            extensao: filename.split('.').pop()
        })

        return res.status(200).json(file)
    }
}