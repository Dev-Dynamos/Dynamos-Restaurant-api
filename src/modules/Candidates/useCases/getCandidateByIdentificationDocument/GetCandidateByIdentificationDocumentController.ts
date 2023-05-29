import { Request, Response } from "express";
import { GetCandidateByIdentificationDocumentUseCase } from "./GetCandidateByIdentificationDocumentUseCase";

class GetCandidateByIdentificationDocumentController {
    constructor(private getCandidateByIdentificationDocumentUseCase: GetCandidateByIdentificationDocumentUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { code } = req.params;
        console.log(code);
        

        const candidate = await this.getCandidateByIdentificationDocumentUseCase.execute({ code });
        return res.status(200).json(candidate);
    }
}

export { GetCandidateByIdentificationDocumentController };