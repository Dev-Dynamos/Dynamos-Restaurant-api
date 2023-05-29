import { Request, Response } from "express";
import { GetOneCountyUseCase } from "./getOneCountyUseCase";

export class GetOneCountyController {
    constructor(private getOneCountyUseCase: GetOneCountyUseCase){}
    async handle(req:Request, res:Response): Promise<Response>{
        const { id } = req.params
        const county = await this.getOneCountyUseCase.execute(id);
        return res.status(200).json(county)
    }
}