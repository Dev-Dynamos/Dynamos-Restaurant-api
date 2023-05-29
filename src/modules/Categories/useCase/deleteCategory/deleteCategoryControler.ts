import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase";


export class DeleteCategoryController{
    constructor(private deleteCategoryUseCase: DeleteCategoryUseCase){}
    async handle(req:Request, res:Response): Promise<Response>{
        const { id } = req.params;
        const category = await this.deleteCategoryUseCase.execute(id)
        return res.json(category)
    }
}