import { Request, Response } from "express";
import { DeleteRoleUseCase } from "./deleteRoleUseCase";

export class DeleteRoleController {
  constructor(private deleteRoleUseCase: DeleteRoleUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const role = await this.deleteRoleUseCase.execute(id)
    return response.status(200).json(role)
  }
}