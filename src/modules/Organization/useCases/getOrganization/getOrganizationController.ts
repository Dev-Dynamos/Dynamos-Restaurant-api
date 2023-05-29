import { Request, Response } from "express";
import { GetOrganizationUseCase } from "./getOrganizationUseCase";

export class GetOrganizationController {
  constructor(private getOrganizationUseCase: GetOrganizationUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const organization = await this.getOrganizationUseCase.execute(id)
    return response.status(200).json(organization)
  }
}