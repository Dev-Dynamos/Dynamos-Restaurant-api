import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./createCategoryUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";

export class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}

    async handle(req: Request, res: Response): Promise<Response>{
        const schema = Yup.object().shape({
            nome: Yup.string().required("O campo nome é obrigatório"),
        })
        const { nome } = req.body;
        if(
            !(await schema.isValid({
                nome,
            }))
        ){
            throw new RequestError("Preencha os campos obrigatórios!", 400)
        }
        const category = await this.createCategoryUseCase.execute(nome)
        return res.status(201).json(category)
    }
}