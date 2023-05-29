import { RequestError } from "../../../../typeErrors/error-api";
import { Request, Response } from 'express';
import * as yup from 'yup';
import { CreateSchoolSubjectUseCase } from './CreateSchoolSubjectUseCase';


class CreateSchoolSubjectController {
  constructor(private createSchoolSubjectUseCase: CreateSchoolSubjectUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const schema = yup.object().shape({
      nome: yup.string().required('O campo nome é obrigatório'),
      descricao: yup.string().required('O campo descrição é obrigatório'),
    });

    const { nome, descricao, cursoId } = req.body;

    if(!await schema.isValid({ nome, descricao })) {
      throw new RequestError('Preencha os campos obrigatórios!'); 
    }

    const schoolSubject = await this.createSchoolSubjectUseCase.execute({ nome, descricao, cursoId});
    return res.status(201).json(schoolSubject);

  }
}

export { CreateSchoolSubjectController };