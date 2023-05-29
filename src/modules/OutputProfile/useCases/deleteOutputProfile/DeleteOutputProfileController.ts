import { Request, Response } from "express";
import { DeleteOutputProfileUseCase } from "./DeleteOutputProfileUseCase";

class DeleteOutputProfileController {
  constructor(private deleteOutputProfileUseCase: DeleteOutputProfileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

   const OutputProfileDeletedOne = await this.deleteOutputProfileUseCase.execute({ id });
   return res.status(200).json(OutputProfileDeletedOne);
  }
}

export { DeleteOutputProfileController };

