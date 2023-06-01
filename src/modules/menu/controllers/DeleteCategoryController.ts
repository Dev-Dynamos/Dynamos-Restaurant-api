import { DeleteMenuUseCase } from "../useCases/DeleteCategoryUseCase";
import { Response, Request } from "express";

export class DeleteMenuController {
  constructor(private deleteMenuUseCase: DeleteMenuUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const menu = await this.deleteMenuUseCase.execute(id);

    return res.status(200).json(menu);
  }
}
