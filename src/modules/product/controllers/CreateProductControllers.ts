import { Request, Response } from "express";
import { CreateProductUseCase } from "../useCases/CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { nome, categoriaId, preco, ficheiroId, descricao } = Req.body;

    const product = await this.createProductUseCase.execute({
      nome,
      preco,
      categoriaId,
      ficheiroId,
      descricao
    });

    return Res.status(201).json(product);
  }
}
