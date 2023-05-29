import { Request, Response } from "express";
import { CreateEnrollmentUseCase } from "./CreateEnrollmentUseCase";
import * as yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


export class CreateEnrollmentController {
    constructor(private createEnrollmentUseCase: CreateEnrollmentUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const schema = yup.object().shape({
            escolaId: yup.string().required(),
            candidatoId: yup.string().required()
        });

        const { escolaId, candidatoId } = req.body;

        if(!(await schema.isValid({ escolaId, candidatoId }))) {
            throw new RequestError("Envie os campos obrigatórios", 400);
        }

        const enrollment = await this.createEnrollmentUseCase.execute({ escolaId, candidatoId });
        return res.status(201).json(enrollment);
    }
}