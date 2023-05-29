import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { CreateSchoolUseCase } from "./createSchoolUseCase";
import { CreateSchoolController } from "./createSchoolController";

const schoolRepository = new SchoolRepository()
const createSchoolUseCase = new CreateSchoolUseCase(schoolRepository)
const createSchoolController = new CreateSchoolController(createSchoolUseCase)

export { createSchoolController }