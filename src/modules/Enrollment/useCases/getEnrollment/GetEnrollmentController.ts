import { Request, Response } from "express";
import { GetEnrollmentUseCase } from "./GetEnrollmentUseCase";

class GetEnrollmentController {
    constructor(private getEnrollmentUseCase: GetEnrollmentUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const enrollment = await this.getEnrollmentUseCase.execute({ id });
        return res.status(200).json(enrollment);
    }
}

export { GetEnrollmentController }