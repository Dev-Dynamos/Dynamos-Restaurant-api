import { Response, Request } from "express";
import { GetClerskUseCase } from "../useCases/GetClerksUseCase";

export class GetClerksController {
  constructor(private getClerksUseCase: GetClerskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const clerks = await this.getClerksUseCase.execute();

    return res.status(200).json(clerks);
  }
}
