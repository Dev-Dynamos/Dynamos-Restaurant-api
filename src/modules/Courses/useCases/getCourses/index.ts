import { CourseRepository } from "../../repositories/implementations/CourseRepository";
import { GetCoursesController } from "./GetCoursesController";
import { GetCoursesUseCase } from "./GetCoursesUseCase";

const courseRepository = new CourseRepository();
const getCoursesUseCase = new GetCoursesUseCase(courseRepository);
const getCoursesController = new GetCoursesController(getCoursesUseCase);

export { getCoursesController };