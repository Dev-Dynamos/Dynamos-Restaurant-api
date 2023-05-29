import { Request, Response } from "express";
import { GetIntendedCourseUseCase } from "./GetIntendedCourseUseCase";

class GetIntendedCourseController {
    constructor(private getIntendedCourseUseCase: GetIntendedCourseUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const intendedCourse = await this.getIntendedCourseUseCase.execute({ id });
        return res.status(200).json(intendedCourse);
    }
}

export { GetIntendedCourseController }