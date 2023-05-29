import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { FindSchoolByNameController } from "./findSchoolByNameController";
import { FindSchoolByNameUseCase } from "./findSchoolByNameUseCase";

const schoolRepository = new SchoolRepository()
const findSchoolByNameUseCase = new FindSchoolByNameUseCase(schoolRepository)
const findSchoolByNameController = new FindSchoolByNameController(findSchoolByNameUseCase)

export { findSchoolByNameController }