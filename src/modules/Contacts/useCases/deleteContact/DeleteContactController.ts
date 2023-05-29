import { Request, Response } from "express";
import { DeleteContactUseCase } from "./DeleteContactUseCase";

class DeleteContactController {
  constructor(private deleteContactUseCase: DeleteContactUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

   const contactDeletedOne = await this.deleteContactUseCase.execute({ id });
   return res.status(200).json(contactDeletedOne);
  }
}

export { DeleteContactController };

