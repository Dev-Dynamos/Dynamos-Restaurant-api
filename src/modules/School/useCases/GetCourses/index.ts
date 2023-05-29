import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { GetCoursesController } from "./GetCoursesController";
import { GetCoursesUseCase } from "./GetCoursesUseCase";

const schoolRepository = new SchoolRepository();
const getCoursesUseCase = new GetCoursesUseCase(schoolRepository);
const getCoursesController = new GetCoursesController(getCoursesUseCase);

export { getCoursesController };