import { Request, Response } from "express";
import { GetCategoryUseCase } from "./getCategoryUseCase";


export class GetCategoryController{
    constructor(private getCategoryUseCase: GetCategoryUseCase){}
    async handle(res:Response):Promise<Response>{
        const categoryDatas = await this.getCategoryUseCase.execute()
        return res.status(200).json(categoryDatas)
    }
}