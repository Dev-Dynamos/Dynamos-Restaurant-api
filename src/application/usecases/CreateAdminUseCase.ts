import { Admin } from "../../domain/entities/admin"

type CreateAdminRequest={
    name:string,
    email:string,
    password:string
}

export class CreateAdminUseCase{
    execute({name,email,password}:CreateAdminRequest){
        const admin=Admin.create({name,email,password})
    }
}