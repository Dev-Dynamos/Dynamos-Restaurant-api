import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { GetSchoolsUseCase } from "./getSchoolsUseCase";
import { GetSchoolsController } from "./getSchoolsController";

const schoolRepository = new SchoolRepository()
const getSchoolsUseCase = new GetSchoolsUseCase(schoolRepository)
const getSchoolsController = new GetSchoolsController(getSchoolsUseCase)

export { getSchoolsController }