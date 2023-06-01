import { Response, Request } from "express";
import { GetAdminUseCase } from "../useCases/GetAdminUseCase";

export class GetAdminController {
  constructor(private getAdminUseCase: GetAdminUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const admin = await this.getAdminUseCase.execute();

    return res.status(200).json(admin);
  }
}
