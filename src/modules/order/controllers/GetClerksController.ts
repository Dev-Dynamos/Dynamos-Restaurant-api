import { Response, Request } from "express";
import { GetOrderUseCase } from "../useCases/GetOrderUseCase";

export class GetClerksController {
  constructor(private getClerksUseCase: GetOrderUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const clerks = await this.getClerksUseCase.execute();

    return res.status(200).json(clerks);
  }
}
