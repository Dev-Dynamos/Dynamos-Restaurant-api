import { DeleteStockUseCase } from "../useCases/DeleteStockUseCase";
import { Response, Request } from "express";

export class DeleteStockController {
  constructor(private deleteStockUseCase: DeleteStockUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const stock = await this.deleteStockUseCase.execute(id);

    return res.status(200).json(stock);
  }
}
