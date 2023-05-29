import { Request, Response } from "express";
import { UpdateOrganizationUseCase } from "./updateOrganizationUseCase";

export class UpdateOrganizationController {
  constructor(private updateOrganizationUseCase: UpdateOrganizationUseCase){}

  async handle(request: Request, response: Response){
    const { escolaId } = request.body
    const { id } = request.params

    const organization = await this.updateOrganizationUseCase.execute({id, escolaId})
    return response.status(200).json(organization)
  }
}