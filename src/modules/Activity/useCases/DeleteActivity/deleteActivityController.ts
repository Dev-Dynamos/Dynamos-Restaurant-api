import { Request, Response } from "express";
import { DeleteActivityUseCase } from "./deleteActivityUseCase";

export class DeleteActivityController {
  constructor(private deleteActivityUseCase: DeleteActivityUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const activity = await this.deleteActivityUseCase.execute(id)
    return response.status(200).json(activity)
  }
}