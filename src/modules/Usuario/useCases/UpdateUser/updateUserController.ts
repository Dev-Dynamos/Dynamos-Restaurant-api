import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";
import { hash } from "bcrypt"

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) { }

  async handle(request: Request, response: Response) {
    const { nome, email, senha, fotoUrl } = request.body
    const { id } = request.params

    const user = await this.updateUserUseCase.execute({ nome, email, fotoUrl, senha: await hash(senha, 8) }, id)
    return response.status(200).json(user)
  }
}