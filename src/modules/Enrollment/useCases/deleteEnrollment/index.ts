import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository"
import { DeleteEnrollmentController } from "./DeleteEnrollmentController";
import { DeleteEnrollmentUseCase } from "./DeleteEnrollmentUseCase";

const enrollmentRepository = new EnrollmentRepository();
const deleteEnrollmentUseCase = new DeleteEnrollmentUseCase(enrollmentRepository);
const deleteEnrollmentController = new DeleteEnrollmentController(deleteEnrollmentUseCase);

export { deleteEnrollmentController };