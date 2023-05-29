import { CourseRepository } from "../../repositories/implementations/CourseRepository";
import { CreateCourseController } from "./CreateCourseController";
import { CreateCourseUseCase } from "./CreateCourseUseCase";
import { SchoolRepository } from "../../../../../src//modules/School/repositories/implementation/SchoolRepository";

const schoolRepository = new SchoolRepository()
const courseRepository = new CourseRepository();
const createCourseUseCase = new CreateCourseUseCase(courseRepository, schoolRepository);
const createCourseController = new CreateCourseController(createCourseUseCase);

export { createCourseController };