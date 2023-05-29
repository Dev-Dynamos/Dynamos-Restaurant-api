import { Request, Response } from "express";
import { FindTrainingAreasUseCase } from "./FindTrainingAreasUseCase";


class FindTrainingAreasController {
    constructor(private findTrainingAreasUseCase: FindTrainingAreasUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { search, skip, take } = req.query;

        const trainingAreas = await this.findTrainingAreasUseCase.execute({ search, skip, take });
        return res.status(200).json({ trainingAreas });
    }
}

export { FindTrainingAreasController };