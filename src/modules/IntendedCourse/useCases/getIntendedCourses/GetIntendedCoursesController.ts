import { Request, Response } from "express";
import { GetIntendedCoursesUseCase } from "./GetIntendedCoursesUseCase";

class GetIntendedCoursesController {
    constructor(private getIntendedCoursesUseCase: GetIntendedCoursesUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const intendedCourse = await this.getIntendedCoursesUseCase.execute();
        return res.status(200).json(intendedCourse);
    }
}

export { GetIntendedCoursesController }