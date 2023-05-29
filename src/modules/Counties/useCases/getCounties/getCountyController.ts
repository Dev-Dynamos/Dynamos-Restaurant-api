import { Response } from "express";
import { GetCountyUseCase } from "./getCountyUseCase";


export class GetCountyController {
    constructor(private getCountyUseCase: GetCountyUseCase){}
    async handle(res:Response): Promise<Response>{
        const county = await this.getCountyUseCase.execute()
        return res.status(200).json(county)
    }
}