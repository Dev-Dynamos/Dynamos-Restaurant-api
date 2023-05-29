import { Request, Response } from "express";
import { CreateOutputProfileUseCase } from "./CreateOutputProfileUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";


class CreateOutputProfileController {
  constructor(private createOutputProfileUseCase: CreateOutputProfileUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      nome: Yup.string().required('O campo nome é obrigatório'),
      descricao: Yup.string().required('O campo descrição é obrigatório'),
      areaDeFormacaoId: Yup.string().required('A categoria é obrigatória')
    });

    const { nome, descricao, areaDeFormacaoId, fotoUrl } = req.body;

    if (!(await schema.isValid({
      nome,
      descricao,
      areaDeFormacaoId
    }))
    ) {
      throw new RequestError("Preencha os campos obrigatórios!", 400);
    }

    const outputProfile = await this.createOutputProfileUseCase.execute({ nome, descricao, areaDeFormacaoId, fotoUrl });
    return res.status(201).json(outputProfile)
  }
}

export { CreateOutputProfileController };