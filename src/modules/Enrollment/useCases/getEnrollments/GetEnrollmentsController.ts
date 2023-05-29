import { Request, Response } from "express";
import { GetEnrollmentsUseCase } from "./GetEnrollmentsUseCase";

class GetEnrollmentsController {
    constructor(private getEnrollmentsUseCase: GetEnrollmentsUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const enrollment = await this.getEnrollmentsUseCase.execute();
        return res.status(200).json(enrollment);
    }
}

export { GetEnrollmentsController }