import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import * as Yup from "yup";
import { hash } from "bcrypt"
import { RequestError } from "../../../../typeErrors/error-api";


export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(req: Request, res: Response) {
    const { nome, email, senha, provinciaId, tipoUsuario, escolaId, fotoUrl } = req.body

    const schema = Yup.object().shape({
      nome: Yup.string().required("O campo nome é obrigatório"),
      senha: Yup.string().required("O campo senha é obrigatório"),
      email: Yup.string().email().required("O campo escola é obrigatório"),
      tipoUsuario: Yup.string().required("O campo tipoUsuario é obrigatório"),
    })
    if (
      !(await schema.isValid({
        nome,
        email,
        senha,
        tipoUsuario
      }))
    ) {
      throw new RequestError("Preencha os campos obrigatórios!", 400)
    }
    const user = await this.createUserUseCase.execute({ nome, email, senha: await hash(senha, 8), tipoUsuario, escolaId, provinciaId, fotoUrl })

    return res.status(201).json(user)
  }
}