import { DeleteClientUseCase } from "../useCases/DeleteClientUseCase";
import { Response, Request } from "express";

export class DeleteClientController {
  constructor(private deleteClientUseCase: DeleteClientUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const client = await this.deleteClientUseCase.execute(id);

    return res.status(200).json(client);
  }
}
