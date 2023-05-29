import { Request, Response } from "express";
import { UpdateCountyUseCase } from "./updateCountyUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


export class UpdateCountyController {
    constructor(private updateCountyUseCase: UpdateCountyUseCase){}
    async handle(req:Request, res:Response): Promise<Response>{
        const { id } =  req.params;
        const { nome } = req.body;
        const schema = Yup.object().shape({
            nome: Yup.string().required("O campo nome é obrigatório"),
        })
        if(
            !(await schema.isValid({
                nome,
            }))
        ){
            throw new RequestError("Preencha os campos obrigatórios!", 400)
        }
        const county = await this.updateCountyUseCase.execute(id, nome)
        return res.status(200).json(county);
    }
}