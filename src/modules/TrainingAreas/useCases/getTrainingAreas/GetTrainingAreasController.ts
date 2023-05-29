import { Request, Response } from "express";
import { GetTrainingAreasUseCase } from "./GetTrainingAreasUseCase";

class GetTrainingAreasController {
  constructor(private getTrainingAreasUseCase: GetTrainingAreasUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const trainingAreas = await this.getTrainingAreasUseCase.execute();
    return res.status(200).json(trainingAreas);
  }
}

export { GetTrainingAreasController };