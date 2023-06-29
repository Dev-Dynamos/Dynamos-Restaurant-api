import { AppError } from "../../../errors/AppError";
import jwt from "jsonwebtoken";
import { AdminRepository } from "../../admin/repository/implement/AdminRepository";


interface IAuthenticationLoginRequest {
    email: string;
    password: string;
}

export class AuthenticationUseCase {
    constructor(
        private adminRepository: AdminRepository
    ) { }

    async execute({ email, password }: IAuthenticationLoginRequest) {
        const adminExists = await this.adminRepository.findByEmail(email);

        if (!adminExists)
            throw new AppError("Email ou palavra passe incorrecta", 400);

        const passwordMath = password === adminExists.password;

        if (!passwordMath)
            throw new AppError("Email ou palavra passe incorrecta", 400);

        const token = jwt.sign(
            {
                id: adminExists.id,
            },
            process.env.TOKEN + "",
            {
                subject: adminExists.id,
                expiresIn: "1d"
            });

        return { token, admin: adminExists }
    }
}