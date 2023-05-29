import { Request, Response } from "express";
import { UpdateLocationUseCase } from "./updateLocationUseCase";

export class UpdateLocationController {
  constructor(private updateLocationUseCase: UpdateLocationUseCase){}

  async handle(request: Request, response: Response){
    const { provinciaId, municipioId, endereco1, endereco2} = request.body
    const { id } = request.params

    const location = await this.updateLocationUseCase.execute({ provinciaId, municipioId, endereco1, endereco2, id})
    return response.status(200).json(location)
  }
}