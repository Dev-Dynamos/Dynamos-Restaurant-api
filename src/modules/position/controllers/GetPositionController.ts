import { Response, Request } from "express";
import { GetPositionUseCase } from "../useCases/GetPositionUseCase";

export class GetPositionController {
  constructor(private getPositionUseCase: GetPositionUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const position = await this.getPositionUseCase.execute();

    return res.status(200).json(position);
  }
}
