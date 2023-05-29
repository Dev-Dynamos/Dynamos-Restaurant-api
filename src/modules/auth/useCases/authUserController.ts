import { Request, Response } from "express";
import { AuthUserUseCase } from "./authUserUseCase";


export class AuthUserController {
    constructor(private authUserUseCase: AuthUserUseCase) { }

    async handle(req: Request, res: Response) {
        const { email, senha } = req.body

        const session = await this.authUserUseCase.execute({ email, senha })

        if (session instanceof Error) {
            return res.status(400).json(session.message)
        }

        return res.json(session)
    }
}