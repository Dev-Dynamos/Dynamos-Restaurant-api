import { CourseRepository } from "../../repositories/implementations/CourseRepository";
import { FindCoursesController } from "./FindCoursesController";
import { FindCoursesUseCase } from "./FindCoursesUseCase";


const coursesRepository = new CourseRepository();
const findCoursesUseCase = new FindCoursesUseCase(coursesRepository);
const findCoursesController = new FindCoursesController(findCoursesUseCase);

export { findCoursesController };