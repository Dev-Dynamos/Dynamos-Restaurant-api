import { Request, Response } from "express";
import { UpdateHistoryUseCase } from "./updateHistoryUseCase";

export class UpdateHistoryController {
  constructor(private updateHistoryUseCase: UpdateHistoryUseCase) { }

  async handle(request: Request, response: Response) {
    const { descricao, fundador, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 } = request.body
    const { id } = request.params

    const history = await this.updateHistoryUseCase.execute({ id, descricao, fundador, fotoUrl, fotoUrl2, fotoUrl3, fotoUrl4 })
    return response.status(200).json(history)
  }
}