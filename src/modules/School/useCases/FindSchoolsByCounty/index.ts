import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { FindSchoolsByCountyController } from "./findSchoolsByCountyController";
import { FindSchoolsByCountyUseCase } from "./findSchoolsByCountyUseCase";

const schoolRepository = new SchoolRepository()
const findSchoolsByCountyUseCase = new FindSchoolsByCountyUseCase(schoolRepository)
const findSchoolsByCountyController = new FindSchoolsByCountyController(findSchoolsByCountyUseCase)

export { findSchoolsByCountyController }