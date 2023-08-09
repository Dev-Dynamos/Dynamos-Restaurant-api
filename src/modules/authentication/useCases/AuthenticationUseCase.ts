import { AppError } from "../../../errors/AppError";
import jwt from "jsonwebtoken";
import { AdminRepository } from "../../admin/repository/implement/AdminRepository";
import { ClientRepository } from "../../client/repository/implement/ClientRepository";


interface IAuthenticationLoginRequest {
    email: string;
    password: string;
    status: string
}

export class AuthenticationUseCase {
    constructor(
        private adminRepository: AdminRepository,
        private clientRepository: ClientRepository
    ) { }

    async execute({ email, password, status }: IAuthenticationLoginRequest) {
        const adminExists = status === "Admin" ? await this.adminRepository.findByEmail(email) : await this.clientRepository.findByEmail(email);
        console.log(adminExists);
        
        if (!adminExists)
            throw new AppError("Email ou palavra passe incorrecta", 400);

        const passwordMath = password === adminExists.password;

        console.log(passwordMath, "skkdkd");
        

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