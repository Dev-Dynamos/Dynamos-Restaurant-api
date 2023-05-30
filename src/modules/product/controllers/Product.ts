import { Request, Response } from "express";
import { CreateProductUseCase } from "../useCases/CreateProductUseCase";

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { nome, descricao, preco } = Req.body;

    const product = await this.createProductUseCase.execute({
      nome,
      descricao,
      preco,
    });

    return Res.status(201).json(product);
  }
}
