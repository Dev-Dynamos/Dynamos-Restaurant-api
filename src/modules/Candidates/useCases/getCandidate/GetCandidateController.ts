import { Request, Response } from "express";
import { GetCandidateUseCase } from "./GetCandidateUseCase";

class GetCandidateController {
    constructor(private getCandidateUseCase: GetCandidateUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const candidate = await this.getCandidateUseCase.execute(id);
        return res.status(200).json(candidate);
    }
}

export { GetCandidateController };