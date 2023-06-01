import { DeleteCategoryUseCase } from "../useCases/DeleteCategoryUseCase";
import { Response, Request } from "express";

export class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const category = await this.deleteCategoryUseCase.execute(id);

    return res.status(200).json(category);
  }
}
