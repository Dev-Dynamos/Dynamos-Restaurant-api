import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository"
import { CreateEnrollmentController } from "./CreateEnrollmentController";
import { CreateEnrollmentUseCase } from "./CreateEnrollmentUseCase";

const enrollmentRepository = new EnrollmentRepository();
const createEnrollmentUseCase = new CreateEnrollmentUseCase(enrollmentRepository);
const createEnrollmentController = new CreateEnrollmentController(createEnrollmentUseCase);

export { createEnrollmentController };