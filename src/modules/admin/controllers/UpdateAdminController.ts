import { Request, Response } from "express";
import { UpdateAdminUseCase } from "../useCases/UpdateAdminUseCase";

export class UpdateAdminController {
  constructor(private updateAdminUseCase: UpdateAdminUseCase) {}

  async handle(req: Request, res: Response) {
    const { email, name, password } = req.body;
    const { id } = req.params;

    const admin = await this.updateAdminUseCase.execute({
      email,
      name,
      password,
      id,
    });
    return res.status(200).json(admin);
  }
}
