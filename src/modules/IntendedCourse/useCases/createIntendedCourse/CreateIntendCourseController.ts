import { Request, Response } from "express";
import { CreateIntendedCourseUseCase } from "./CreateIntendedCourseUseCase";
import * as yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";
import { IIntendedCourseDTO } from "../../dtos/CreateIntendedCourseDTO";


export class CreateIntendedCourseController {
    constructor(private createIntendedCourseUseCase: CreateIntendedCourseUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const schema = yup.object().shape({
            inscricaoId: yup.string().required(),
            cursoId: yup.string().required()
        });

        const { cursoId, inscricaoId }: IIntendedCourseDTO = req.body;

        if(!(await schema.isValid({ cursoId, inscricaoId }))) {
            throw new RequestError("Envie os campos obrigatórios", 400);
        }

        const intendedCourse = await this.createIntendedCourseUseCase.execute({ cursoId, inscricaoId });
        return res.status(201).json(intendedCourse);
    }
}