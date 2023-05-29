import { IntendedCourseRepository } from "../../repositories/implementations/IntendedCourseRepository"
import { DeleteIntendedCourseController } from "./DeleteIntendedCourseController";
import { DeleteIntendedCourseUseCase } from "./DeleteIntendedCourseUseCase";

const intendedCourseRepository = new IntendedCourseRepository();
const deleteIntendedCourseUseCase = new DeleteIntendedCourseUseCase(intendedCourseRepository);
const deleteIntendedCourseController = new DeleteIntendedCourseController(deleteIntendedCourseUseCase);

export { deleteIntendedCourseController };