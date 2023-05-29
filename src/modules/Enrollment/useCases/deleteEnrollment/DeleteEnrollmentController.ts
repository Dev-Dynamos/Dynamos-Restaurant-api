import { Request, Response } from "express";
import { DeleteEnrollmentUseCase } from "./DeleteEnrollmentUseCase";

class DeleteEnrollmentController {
    constructor(private deleteEnrollmentUseCase: DeleteEnrollmentUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        const enrollment = await this.deleteEnrollmentUseCase.execute({ id });
        return res.status(200).json(enrollment)
    }
}

export { DeleteEnrollmentController }