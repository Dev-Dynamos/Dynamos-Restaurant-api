import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository"
import { GetEnrollmentController } from "./GetEnrollmentController";
import { GetEnrollmentUseCase } from "./GetEnrollmentUseCase";

const enrollmentRepository = new EnrollmentRepository();
const getEnrollmentUseCase = new GetEnrollmentUseCase(enrollmentRepository);
const getEnrollmentController = new GetEnrollmentController(getEnrollmentUseCase);

export { getEnrollmentController };