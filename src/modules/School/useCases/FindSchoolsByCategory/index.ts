import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { FindSchoolsByCategoryController } from "./findSchoolsByCategoryController";
import { FindSchoolsByCategoryUseCase } from "./findSchoolsByCategoryUseCase";

const schoolRepository = new SchoolRepository()
const findSchoolsByCategoryUseCase = new FindSchoolsByCategoryUseCase(schoolRepository)
const findSchoolsByCategoryController = new FindSchoolsByCategoryController(findSchoolsByCategoryUseCase)

export { findSchoolsByCategoryController }