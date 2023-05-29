import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { DeleteSchoolUseCase } from "./deleteSchoolUseCase";
import { DeleteSchoolController } from "./deleteSchoolController";

const schoolRepository = new SchoolRepository()
const deleteSchoolUseCase = new DeleteSchoolUseCase(schoolRepository)
const deleteSchoolController = new DeleteSchoolController(deleteSchoolUseCase)

export { deleteSchoolController }