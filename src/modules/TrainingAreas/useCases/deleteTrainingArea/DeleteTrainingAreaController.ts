import { Request, Response } from "express";
import { DeleteTrainingAreaUseCase } from "./DeleteTrainingAreaUseCase";

class DeleteTrainingAreaController {
  constructor(private deleteTrainingAreaUseCase: DeleteTrainingAreaUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

   const trainingAreaDeletedOne = await this.deleteTrainingAreaUseCase.execute({ id });
   return res.status(200).json(trainingAreaDeletedOne);
  }
}

export { DeleteTrainingAreaController };