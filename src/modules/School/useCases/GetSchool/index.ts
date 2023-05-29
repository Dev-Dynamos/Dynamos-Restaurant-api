import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { GetSchoolUseCase } from "./getSchoolUseCase";
import { GetSchoolController } from "./getSchoolController";

const schoolRepository = new SchoolRepository()
const getSchoolUseCase = new GetSchoolUseCase(schoolRepository)
const getSchoolController = new GetSchoolController(getSchoolUseCase)

export { getSchoolController }