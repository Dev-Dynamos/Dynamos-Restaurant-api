import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { UpdateSchoolUseCase } from "./updateSchoolUseCase";
import { UpdateSchoolController } from "./updateSchoolController";

const schoolRepository = new SchoolRepository()
const updateSchoolUseCase = new UpdateSchoolUseCase(schoolRepository)
const updateSchoolController = new UpdateSchoolController(updateSchoolUseCase)

export { updateSchoolController }