import { Request, Response } from "express";
import { DeleteCourseUseCase } from "./DeleteCourseUseCase";

class DeleteCourseController {
  constructor(private deleteCourseUseCase: DeleteCourseUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

   const courseDeletedOne = await this.deleteCourseUseCase.execute({ id });
   return res.status(200).json(courseDeletedOne);
  }
}

export { DeleteCourseController };

