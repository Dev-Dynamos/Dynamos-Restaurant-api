import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "../useCases/UpdateCategoryUseCase";

export class UpdateCategoryController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}
  async handle(req: Request, res: Response) {
    const { nome } = req.body;
    const { id } = req.params;

    const category = await this.updateCategoryUseCase.execute({ id, nome });
    return res.status(200).json(category);
  }
}
