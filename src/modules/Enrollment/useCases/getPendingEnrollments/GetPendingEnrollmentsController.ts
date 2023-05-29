import { Request, Response } from "express";
import { GetPendingEnrollmentsUseCase } from "./GetPendingEnrollmentsUseCase";

class GetPendingEnrollmentsController {
    constructor(private getPendingEnrollmentsUseCase: GetPendingEnrollmentsUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const pendingEnrollments = await this.getPendingEnrollmentsUseCase.execute();
        return res.status(200).json(pendingEnrollments);
    }
}

export { GetPendingEnrollmentsController }