import { DeletePositionUseCase } from "../useCases/DeletePositionUseCase";
import { Response, Request } from "express";

export class DeletePositionController {
  constructor(private deletePositionUseCase: DeletePositionUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const position = await this.deletePositionUseCase.execute(id);

    return res.status(200).json(position);
  }
}
