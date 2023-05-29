import { Request, Response } from "express";
import { DeleteIntendedCourseUseCase } from "./DeleteIntendedCourseUseCase";

class DeleteIntendedCourseController {
    constructor(private deleteIntendedCourseUseCase: DeleteIntendedCourseUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const intendedCourse = await this.deleteIntendedCourseUseCase.execute({ id });
        return res.status(200).json(intendedCourse)
    }
}

export { DeleteIntendedCourseController }