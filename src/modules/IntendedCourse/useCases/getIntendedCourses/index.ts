import { IntendedCourseRepository } from "../../repositories/implementations/IntendedCourseRepository"
import { GetIntendedCoursesController } from "./GetIntendedCoursesController";
import { GetIntendedCoursesUseCase } from "./GetIntendedCoursesUseCase";

const intendedCourseRepository = new IntendedCourseRepository();
const getIntendedCoursesUseCase = new GetIntendedCoursesUseCase(intendedCourseRepository);
const getIntendedCoursesController = new GetIntendedCoursesController(getIntendedCoursesUseCase);

export { getIntendedCoursesController };