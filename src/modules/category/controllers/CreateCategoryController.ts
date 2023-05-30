import { Response, Request } from "express";
import { CreateCategoryUseCase } from "../useCases/CreateCategoryUseCase";

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;

    const category = await this.createCategoryUseCase.execute({
      nome,
    });

    return res.status(201).json(category);
  }
}
