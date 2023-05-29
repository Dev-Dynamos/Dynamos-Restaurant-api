import { Request, Response } from "express";
import { GetOneCategoryUseCase } from "./getOneCategoryUseCase";


export class GetOneCategoryController {
    constructor(private getOneCategoryUseCase: GetOneCategoryUseCase){}

    async handle(req:Request, res:Response) {
        const { id } = req.params;
        const category = await this.getOneCategoryUseCase.execute(id)
        return res.status(200).json(category);
    }
}