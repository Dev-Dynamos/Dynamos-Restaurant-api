import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository"
import { GetEnrollmentsController } from "./GetEnrollmentsController";
import { GetEnrollmentsUseCase } from "./GetEnrollmentsUseCase";

const enrollmentRepository = new EnrollmentRepository();
const getEnrollmentsUseCase = new GetEnrollmentsUseCase(enrollmentRepository);
const getEnrollmentsController = new GetEnrollmentsController(getEnrollmentsUseCase);

export { getEnrollmentsController };