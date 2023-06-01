import { DeleteProductUseCase } from "../useCases/DeleteProductUseCase";
import { Response, Request } from "express";

export class DeleteProductController {
  constructor(private deleteProductUseCase: DeleteProductUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const product = await this.deleteProductUseCase.execute(id);

    return res.status(200).json(product);
  }
}
