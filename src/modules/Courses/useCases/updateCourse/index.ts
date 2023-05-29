import { CourseRepository } from "../../repositories/implementations/CourseRepository";
import { UpdateCourseController } from "./UpdateCourseController";
import { UpdateCourseUseCase } from "./UpdateCourseUseCase";


const courseRepository = new CourseRepository();
const updateCourseUseCase = new UpdateCourseUseCase(courseRepository);
const updateCourseController = new UpdateCourseController(updateCourseUseCase);

export { updateCourseController };