import { Response, Request } from "express";
import { GetCategorykUseCase } from "../useCases/GetCategoryUseCase";

export class GetCategoryController {
  constructor(private getCategoryUseCase: GetCategorykUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const category = await this.getCategoryUseCase.execute();

    return res.status(200).json(category);
  }
}
