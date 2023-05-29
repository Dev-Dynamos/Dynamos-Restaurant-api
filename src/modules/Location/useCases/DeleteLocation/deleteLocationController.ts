import { Request, Response } from "express";
import { DeleteLocationUseCase } from "./deleteLocationUseCase";

export class DeleteLocationController {
  constructor(private deleteLocationUseCase: DeleteLocationUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const location = await this.deleteLocationUseCase.execute(id)
    return response.status(200).json(location)
  }
}