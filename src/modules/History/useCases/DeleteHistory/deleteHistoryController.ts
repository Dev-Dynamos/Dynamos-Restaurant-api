import { Request, Response } from "express";
import { DeleteHistoryUseCase } from "./deleteHistoryUseCase";

export class DeleteHistoryController {
  constructor(private deleteHistoryUseCase: DeleteHistoryUseCase){ }

  async handle(request: Request, response: Response){
    const { id } = request.params

    const history = await this.deleteHistoryUseCase.execute(id)
    return response.status(200).json(history)
  }
}