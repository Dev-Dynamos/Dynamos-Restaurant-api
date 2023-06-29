import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import jwt from "jsonwebtoken";
import { AdminRepository } from "../modules/admin/repository/implement/AdminRepository";


type JwtPayloadProps = {
    id: string;
    typeUser: string;
};

export class EnsureAuthenticated {

    async auth(request: Request, response: Response, next: NextFunction) {
        const { authorization } = request.headers;

        const adminRepository = new AdminRepository()

        if (!authorization)
            throw new AppError("Usuário não autorizado", 401);

        const token = authorization.replace("Bearer", "").trim();

        const { id, typeUser } = jwt.verify(token, process.env.TOKEN + "") as JwtPayloadProps;

        const user = await adminRepository.findById(id);

        if (!user)
            throw new AppError("Usuário não autorizado", 401);

        request.userId = user.id;
        request.typeUser = typeUser;
        next();
    }
}