import { Request, Response } from "express";
import { DeleteFileUseCase } from "./deleteFileUseCase";


export class DeleteFileController {
    constructor(private deleteFileUseCase: DeleteFileUseCase){}

    async handle(req:Request, res:Response): Promise<Response>{
        const {id} = req.params;

        await this.deleteFileUseCase.execute(id)

        return res.status(200).json({
            message: "ficheiro eliminado com sucesso!"
        })
    }
}