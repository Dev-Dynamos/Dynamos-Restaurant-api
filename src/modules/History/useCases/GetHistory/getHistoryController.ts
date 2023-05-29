import { Request, Response } from "express";
import { GetHistoryUseCase } from "./getHistoryUseCase";

export class GetHistoryController {
  constructor(private getHistoryUseCase: GetHistoryUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const history = await this.getHistoryUseCase.execute(id)
    return response.status(200).json(history)
  }
}