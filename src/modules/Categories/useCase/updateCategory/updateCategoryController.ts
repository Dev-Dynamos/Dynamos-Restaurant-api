import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./updateCategoryUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


export class UpdateCategoryController {
    constructor(private updateCategoryUseCase: UpdateCategoryUseCase){}
    async handle(req:Request, res:Response): Promise<Response>{
        const schema = Yup.object().shape({
            nome: Yup.string().required("O campo nome é obrigatório"),
        })
        const { nome } = req.body;
        const { id } = req.params;
        if(
            !(await schema.isValid({
                nome,
            }))
        ){
            throw new RequestError("Preencha os campos obrigatórios!", 400)
        }
        const category = await this.updateCategoryUseCase.execute(nome, id)
        return res.status(200).json(category)
    }
}