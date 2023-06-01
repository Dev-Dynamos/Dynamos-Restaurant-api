import { Response, Request } from "express";
import { GetMenuUseCase } from "../useCases/GetMenuUseCase";

export class GetMenuController {
  constructor(private getMenuUseCase: GetMenuUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const menu = await this.getMenuUseCase.execute();

    return res.status(200).json(menu);
  }
}
