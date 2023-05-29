import { Request, Response } from "express";
import { DeleteKinshipUseCase } from "./DeleteKinshipUseCase";

class DeleteKinshipController {
  constructor(private deleteKinshipUseCase: DeleteKinshipUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

   const kinshipDeletedOne = await this.deleteKinshipUseCase.execute({ id });
   return res.status(200).json(kinshipDeletedOne);
  }
}

export { DeleteKinshipController };

