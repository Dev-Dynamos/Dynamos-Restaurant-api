import { Request, Response } from "express";
import { DeleteOfficialUseCase } from "./deleteOfficialUseCase";

export class DeleteOfficialController {
  constructor(private deleteOfficialUseCase: DeleteOfficialUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const official = await this.deleteOfficialUseCase.execute(id)
    return response.status(200).json(official)
  }
}