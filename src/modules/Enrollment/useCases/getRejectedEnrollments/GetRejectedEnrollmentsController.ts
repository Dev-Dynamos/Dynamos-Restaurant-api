import { Request, Response } from "express";
import { GetRejectedEnrollmentsUseCase } from "./GetRejectedEnrollmentsUseCase";

class GetRejectedEnrollmentsController {
    constructor(private getRejectedEnrollmentsUseCase: GetRejectedEnrollmentsUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const rejectedEnrollments = await this.getRejectedEnrollmentsUseCase.execute();
        return res.status(200).json(rejectedEnrollments);
    }
}

export { GetRejectedEnrollmentsController }