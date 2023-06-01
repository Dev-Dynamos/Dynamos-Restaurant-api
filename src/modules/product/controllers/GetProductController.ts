import { Response, Request } from "express";
import { GetProductUseCase } from "../useCases/GetProductUseCase";

export class GetProductController {
  constructor(private getProductUseCase: GetProductUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const product = await this.getProductUseCase.execute();

    return res.status(200).json(product);
  }
}
