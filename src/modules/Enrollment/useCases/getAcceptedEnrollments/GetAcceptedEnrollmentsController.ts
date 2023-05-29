import { Request, Response } from "express";
import { GetAcceptedEnrollmentsUseCase } from "./GetAcceptedEnrollmentsUseCase";

class GetAcceptedEnrollmentsController {
    constructor(private getAcceptedEnrollmentsUseCase: GetAcceptedEnrollmentsUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const acceptedEnrollments = await this.getAcceptedEnrollmentsUseCase.execute();
        return res.status(200).json(acceptedEnrollments);
    }
}

export { GetAcceptedEnrollmentsController }