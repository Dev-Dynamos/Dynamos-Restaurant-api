import { Request, Response } from "express";
import { GetFileUseCase } from "./getFileUseCase";


export class GetFileController {
    constructor(private getFileUsecase: GetFileUseCase){}

    async handle(req:Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const file = await this.getFileUsecase.execute(id)

        return res.status(200).json(file)
    }
}