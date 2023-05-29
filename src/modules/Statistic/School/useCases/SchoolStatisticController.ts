import { Request, Response } from "express";
import { SchoolStatisticUseCase } from "./SchoolStatisticUseCase";


class SchoolStatisticController {
    constructor(private schoolStatisticUseCase: SchoolStatisticUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const statistic = await this.schoolStatisticUseCase.execute({ id });

        return res.status(200).json(statistic);
    }
}

export { SchoolStatisticController }