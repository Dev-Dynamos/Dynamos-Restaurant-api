import { Request, Response } from "express";
import { AuthenticationUseCase } from "../useCases/AuthenticationUseCase";


export class AuthenticationController {
    constructor(private authenticationLoginUseCase: AuthenticationUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {

        const { password, email } = req.body;

        const user = await this.authenticationLoginUseCase.execute({ password, email });

        return res.status(200).json(user);
    }
}