import { IntendedCourseRepository } from "../../repositories/implementations/IntendedCourseRepository"
import { GetIntendedCourseController } from "./GetIntendedCourseController";
import { GetIntendedCourseUseCase } from "./GetIntendedCourseUseCase";

const intendedCourseRepository = new IntendedCourseRepository();
const getIntendedCourseUseCase = new GetIntendedCourseUseCase(intendedCourseRepository);
const getIntendedCourseController = new GetIntendedCourseController(getIntendedCourseUseCase);

export { getIntendedCourseController };