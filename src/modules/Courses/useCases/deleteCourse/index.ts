import { CourseRepository } from "../../repositories/implementations/CourseRepository";
import { DeleteCourseController } from "./DeleteCourseController";
import { DeleteCourseUseCase } from "./DeleteCourseUseCase";


const courseRepository = new CourseRepository();
const deleteCourseUseCase = new DeleteCourseUseCase(courseRepository);
const deleteCourseController = new DeleteCourseController(deleteCourseUseCase);

export { deleteCourseController };