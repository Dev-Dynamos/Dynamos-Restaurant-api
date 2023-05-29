import { Request, Response } from "express";
import { UpdateEnrollmentUseCase } from "./UpdateEnrollmentUseCase";

class UpdateEnrollmentController {
    constructor(private updateEnrollmentUseCase: UpdateEnrollmentUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { estado } = req.body;

        const enrollmentUpdated = this.updateEnrollmentUseCase.execute({ id, estado });
        return res.status(200).json(enrollmentUpdated);
    }
}

export { UpdateEnrollmentController }