import { Request, Response } from "express";
import { DeleteCandidateUseCase } from "./DeleteCandidateUseCase";

class DeleteCandidateController {
    constructor(private deleteCandidateUseCase: DeleteCandidateUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const candidateDeletedOne = this.deleteCandidateUseCase.execute(id);
        return res.status(200).json(candidateDeletedOne);
    }
}

export { DeleteCandidateController };