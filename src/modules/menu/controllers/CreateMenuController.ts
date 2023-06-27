import { Response, Request } from "express";
import { CreateMenuUseCase } from "../useCases/CreateMenuUseCase";

export class CreateMenuController {
  constructor(private createMenuUseCase: CreateMenuUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, preco } = req.body;

    const menu = await this.createMenuUseCase.execute({
      nome,
      preco,
    });

    return res.status(201).json(menu);
  }
}
