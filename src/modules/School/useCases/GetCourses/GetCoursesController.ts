import { Request, Response } from "express";
import { GetCoursesUseCase } from "./GetCoursesUseCase";

export class GetCoursesController {
    constructor(private getCoursesUseCase: GetCoursesUseCase) {}
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const courses = await this.getCoursesUseCase.execute({ escolaId: id });
        return res.status(200).json(courses);
    }
}