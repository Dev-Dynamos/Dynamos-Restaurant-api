import { Request, Response } from "express";
import { GetTrainingAreasUseCase } from "./GetTrainingAreasUseCase";

export class GetTrainingAreasController {
    constructor(private getTrainingAreasUseCase: GetTrainingAreasUseCase) {}
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const trainingAreas = await this.getTrainingAreasUseCase.execute({ escolaId: id });
        return res.status(200).json(trainingAreas);
    }
}