import { DeleteClerkUseCase } from "../useCases/DeleteClerkUseCase";
import { Response, Request } from "express";

export class DeleteClerkController {
  constructor(private deleteClerkUseCase: DeleteClerkUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const clerk = await this.deleteClerkUseCase.execute(id);

    return res.status(200).json(clerk);
  }
}
