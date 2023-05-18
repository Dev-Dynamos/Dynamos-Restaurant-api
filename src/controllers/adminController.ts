import { Response,Request } from "express";
import { AdminRepository } from "../application/adminRepository";

export class CreateAdminController{
    private  adminRepository: AdminRepository;

    constructor(adminRepository:AdminRepository){
        this.adminRepository = adminRepository;
    }

    async handle(req:Request,res:Response){
        const {name,email,password}=req.body;

        await this.adminRepository.createAdmin({name,email,password});
    }
}