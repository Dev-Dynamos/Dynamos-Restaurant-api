import { Request, Response } from "express";
import { CreateAdminUseCase } from "../useCases/CreateAdminUseCase";

export class CreateAdminController {
  constructor(private createAdminUseCase: CreateAdminUseCase) {}

  async handle(Req: Request, Res: Response): Promise<Response> {
    const { name, email, password } = Req.body;

    const admin = await this.createAdminUseCase.execute({
      email,
      name,
      password,
    });

    return Res.status(201).json(admin);
  }
}
