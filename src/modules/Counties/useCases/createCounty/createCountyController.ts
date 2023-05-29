import { Request, Response } from "express";
import { CreateCountyUseCase } from "./createCountyUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";

export class CreateCountyController {
    constructor(private createCountyUseCase: CreateCountyUseCase){}
    async handle(req:Request, res:Response): Promise<Response>{
        const { nome, provinciaId } = req.body;
        const schema = Yup.object().shape({
            nome: Yup.string().required("O campo nome é obrigatório"),
            provinciaId: Yup.string().required("A provincia é obrigatório"),
        })
        if(
            !(await schema.isValid({
                nome,
                provinciaId
            }))
        ){
            throw new RequestError("Preencha os campos obrigatórios!", 400)
        }
        const county = await this.createCountyUseCase.execute(nome, provinciaId);
        return res.status(201).json(county);
    }
}