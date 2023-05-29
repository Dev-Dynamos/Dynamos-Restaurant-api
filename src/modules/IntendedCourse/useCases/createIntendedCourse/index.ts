import { IntendedCourseRepository } from "../../repositories/implementations/IntendedCourseRepository"
import { CreateIntendedCourseController } from "./CreateIntendCourseController";
import { CreateIntendedCourseUseCase } from "./CreateIntendedCourseUseCase";

const intendedCourseRepository = new IntendedCourseRepository();
const createIntendedCourseUseCase = new CreateIntendedCourseUseCase(intendedCourseRepository);
const createIntendedCourseController = new CreateIntendedCourseController(createIntendedCourseUseCase);

export { createIntendedCourseController };