import { Response, Request } from "express";
import { GetStockUseCase } from "../useCases/GetStockUseCase";

export class GetStockController {
  constructor(private getStockUseCase: GetStockUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const stock = await this.getStockUseCase.execute();

    return res.status(200).json(stock);
  }
}
