import { Request, Response } from "express";
import { CreateOrganizationUseCase } from "./createOrganizationUseCase";

export class CreateOrganizationController {
  constructor(private createOrganizationUseCase: CreateOrganizationUseCase){}

  async handle(request: Request, response: Response){
    const { escolaId } = request.body

    const organization = await this.createOrganizationUseCase.execute({ escolaId })
    return response.status(201).json(organization)
  }
}