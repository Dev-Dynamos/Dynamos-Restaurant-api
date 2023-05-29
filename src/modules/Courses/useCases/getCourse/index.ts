import { CourseRepository } from "../../repositories/implementations/CourseRepository";
import { GetCourseController } from "./GetCourseController";
import { GetCourseUseCase } from "./GetCourseUseCase";


const courseRepository = new CourseRepository();
const getCourseUseCase = new GetCourseUseCase(courseRepository);
const getCourseController = new GetCourseController(getCourseUseCase);

export { getCourseController };