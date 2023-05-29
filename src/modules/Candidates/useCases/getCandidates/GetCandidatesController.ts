import { Request, Response } from "express";
import { GetCandidatesUseCase } from "./GetCandidatesUseCase";

class GetCandidatesController {
    constructor(private getCandidatesUseCase: GetCandidatesUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const candidates = await this.getCandidatesUseCase.execute();
        return res.status(200).json(candidates);
    }
}

export { GetCandidatesController };