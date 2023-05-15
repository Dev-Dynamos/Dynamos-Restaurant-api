import { Entity } from "../../core/domain/entity";

type AdminProps={
    name:string,
    email:string,
    password:string;
}

export class Admin extends Entity<AdminProps>{
    private constructor(props:AdminProps,id?:string){
        super(props,id);
    }

    static create(props: AdminProps, id?: string){
        const admin = new Admin(props, id)
        
        return admin
    }
}