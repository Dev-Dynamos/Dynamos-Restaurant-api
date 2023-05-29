import { Request, Response } from "express";
import { CreateCandidateUseCase } from "./CreateCandidateUseCase";
import * as yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";
import { ICandidateDTO } from "../../dtos/CreateCandidateDTO";

class CreateCandidateController {
    constructor(private createCandidateUseCase: CreateCandidateUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const schema = yup.object().shape({
            nome: yup.string().required(),
            sexo: yup.string().required(),
            dataNasc: yup.string().required(),
            photoUrl: yup.string().required(),
            tipoIdentificacao: yup.string().required(),
            codigoDocumento: yup.string().required(),
            pdfIdentificacao: yup.string().required(),
            tipoCertificacaoEscolar: yup.string().required(),
            pdfCertificacaoEscolar: yup.string().required(),
        });

        const data: ICandidateDTO = req.body;

        const { nome, sexo, dataNasc, photoUrl, tipoIdentificacao, codigoDocumento, pdfIdentificacao, tipoCertificacaoEscolar, pdfCertificacaoEscolar } = data;

        if (!(await schema.isValid({
            nome, sexo, dataNasc,
            photoUrl, tipoIdentificacao, codigoDocumento, pdfIdentificacao,
            tipoCertificacaoEscolar, pdfCertificacaoEscolar
        }))) {
            throw new RequestError("Preencha os campos obrigatórios!");
        }

        Object.assign(data, {
            sexo: data.sexo.toUpperCase()
        });

        const candidate = await this.createCandidateUseCase.execute(data);

        return res.status(201).json(candidate)
    }
}

export { CreateCandidateController };