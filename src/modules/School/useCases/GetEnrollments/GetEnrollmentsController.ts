import { Request, Response } from "express";
import { GetEnrollmentsUseCase } from "./GetEnrollmentsUseCase";

export class GetEnrollmentsController {
    constructor(private getEnrollmentsUseCase: GetEnrollmentsUseCase) {}
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const enrollments = await this.getEnrollmentsUseCase.execute({ escolaId: id });
        return res.status(200).json(enrollments);
    }
}