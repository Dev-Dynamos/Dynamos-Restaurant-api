import { Request, Response } from "express";
import { DeleteOrganizationUseCase } from "./deleteOrganizationUseCase";

export class DeleteOrganizationController {
  constructor(private deleteOrganizationUseCase: DeleteOrganizationUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const organization = await this.deleteOrganizationUseCase.execute(id)
    return response.status(200).json(organization)
  }
}