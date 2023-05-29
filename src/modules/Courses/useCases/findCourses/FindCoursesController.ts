import { Request, Response } from "express";
import { FindCoursesUseCase } from "./FindCoursesUseCase";


class FindCoursesController {
    constructor(private findCoursesUseCase: FindCoursesUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { search, skip, take } = req.query;

        const courses = await this.findCoursesUseCase.execute({ search, skip, take });
        return res.status(200).json({ courses });
    }
}

export { FindCoursesController };