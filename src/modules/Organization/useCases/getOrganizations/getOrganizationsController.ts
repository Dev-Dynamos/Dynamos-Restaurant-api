import { Request, Response } from "express";
import { GetOrganizationsUseCase } from "./getOrganizationsUseCase";

export class GetOrganizationsController {
  constructor(private getOrganizationsUseCase: GetOrganizationsUseCase){}

  async handle(request: Request, response: Response){
    const organization = await this.getOrganizationsUseCase.execute()

    return response.status(200).json(organization)
  }
}