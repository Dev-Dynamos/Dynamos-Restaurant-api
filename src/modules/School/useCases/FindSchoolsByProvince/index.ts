import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { FindSchoolsByProvinceController } from "./findSchoolsByProvinceController";
import { FindSchoolsByProvinceUseCase } from "./findSchoolsByProvinceUseCase";

const schoolRepository = new SchoolRepository()
const findSchoolsByProvinceUseCase = new FindSchoolsByProvinceUseCase(schoolRepository)
const findSchoolsByProvinceController = new FindSchoolsByProvinceController(findSchoolsByProvinceUseCase)

export { findSchoolsByProvinceController }