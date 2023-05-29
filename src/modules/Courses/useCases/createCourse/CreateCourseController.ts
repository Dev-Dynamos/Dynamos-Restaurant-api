import { Request, Response } from "express";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";
import { CreateCourseUseCase } from "./CreateCourseUseCase";


class CreateCourseController {
  constructor(private createCourseUseCase: CreateCourseUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      nome: Yup.string().required('O campo nome é obrigatório'),
      areaDeFormacaoId: Yup.string().required('A categoria é obrigatória')
    });

    const { nome, descricao, areaDeFormacaoId, fotoUrl } = req.body;

    if (!(await schema.isValid({
      nome,
      areaDeFormacaoId
    }))
    ) {
      throw new RequestError("Preencha os campos obrigatórios!", 400);
    }

    const course = await this.createCourseUseCase.execute({ nome, descricao, areaDeFormacaoId, fotoUrl });
    return res.status(201).json(course)
  }
}

export { CreateCourseController };