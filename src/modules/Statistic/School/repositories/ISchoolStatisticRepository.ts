import { Escola } from "@prisma/client";
import { IStatistic } from "./implementations/SchoolStatisticRepository";

export interface ISchoolStatisticRepository {
    findSchoolById(id: string): Promise<Escola>
    getStatistic(schoolId: string): Promise<IStatistic>;
}