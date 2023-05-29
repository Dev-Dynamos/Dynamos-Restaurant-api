import { Request, Response } from "express";
import { DeleteSchoolSubjectUseCase } from "./DeleteSchoolSubjectUseCase";

class DeleteSchoolSubjectController {
  constructor(private deleteSchoolSubjectUseCase: DeleteSchoolSubjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

   const schoolSubjectDeletedOne = await this.deleteSchoolSubjectUseCase.execute({ id });
   return res.status(200).json(schoolSubjectDeletedOne);
  }
}

export { DeleteSchoolSubjectController };

