import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { RequestError } from "../../../typeErrors/error-api";
import { UserRepository } from "../../Usuario/repositories/implementation/UserRepository";
import { IAuthDTO } from "../dtos";

export class AuthUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute({ email, senha }: IAuthDTO) {

        const user = await this.userRepository.findByEmail(email)

        if (!user) throw new RequestError("Usuario não encontrado", 404)


        const passowrdMatch = await compare(senha, user.senha)

        if (!passowrdMatch) throw new RequestError("email ou senha incorrecta", 400)

        const token = sign({},
            process.env.SECRET_JWT, {
            expiresIn: "30d",
            subject: user.id
        })


        return {
            token,
            user
        }
    }
}