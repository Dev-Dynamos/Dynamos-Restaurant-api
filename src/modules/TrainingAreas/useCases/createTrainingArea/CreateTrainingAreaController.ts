import { Request, Response } from "express";
import { CreateTrainingAreaUseCase } from "./CreateTrainingAreaUseCase";
import * as Yup from "yup";
import { RequestError } from "../../../../typeErrors/error-api";
import { ITrainingAreaDTO } from "../../dtos/TrainingAreaDTO";


class CreateTrainingAreaController {
  constructor(private createTrainingAreaUseCase: CreateTrainingAreaUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const schema = Yup.object().shape({
      nome: Yup.string().required('O campo nome é obrigatório'),
      categoriaId: Yup.string().required('A categoria é obrigatória')
    });

    const data: ITrainingAreaDTO = req.body;
    const { nome, categoriaId } = data

    if (!(await schema.isValid({
      nome,
      categoriaId
    }))
    ) {
      throw new RequestError("Preencha os campos obrigatórios!", 400);
    }

    const trainingArea = await this.createTrainingAreaUseCase.execute(data);
    return res.status(201).json(trainingArea)
  }
}

export { CreateTrainingAreaController };