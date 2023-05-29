import { Request, Response } from "express";
import { UpdateOfficialUseCase } from "./updateOfficialUseCase";

export class UpdateOfficialController {
  constructor(private updateOfficialUseCase: UpdateOfficialUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params
    const { nome, contacto, cargoId, departamentoId, numero_agente, generoId } = request.body

    const official = await this.updateOfficialUseCase.execute({generoId, id, nome, contacto, cargoId, departamentoId, numero_agente })
    return response.status(200).json(official)
  }
}