import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase){}

  async handle(request: Request, response: Response){
    const { id } = request.params

    const user = await this.deleteUserUseCase.execute(id)
    return response.status(200).json(user)
  }
}