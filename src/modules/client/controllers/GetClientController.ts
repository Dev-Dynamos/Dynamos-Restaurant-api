import { Response, Request } from "express";
import { GetClientUseCase } from "../useCases/GetClerksUseCase";

export class GetClientController {
  constructor(private getClientUseCase: GetClientUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const client = await this.getClientUseCase.execute();

    return res.status(200).json(client);
  }
}
