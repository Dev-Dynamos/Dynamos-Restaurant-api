import { DeleteAdminUseCase } from "../useCases/DeleteAdminUseCase";
import { Response, Request } from "express";

export class DeleteAdminController {
  constructor(private deleteAdminUseCase: DeleteAdminUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const admin = await this.deleteAdminUseCase.execute(id);

    return res.status(200).json(admin);
  }
}
