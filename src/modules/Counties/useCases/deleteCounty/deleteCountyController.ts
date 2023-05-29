import { Request, Response } from "express";
import { DeleteCountyUseCase } from "./deleteCountyUseCase";


export class DeleteCountyController {
    constructor(private deleteCountyUseCase: DeleteCountyUseCase){}

    async handle(req:Request, res:Response): Promise<Response>{
        const { id } = req.params;
        const county = await this.deleteCountyUseCase.execute(id)
        return res.status(200).json(county);
    }
}