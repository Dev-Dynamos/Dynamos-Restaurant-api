import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository"
import { GetPendingEnrollmentsController } from "./GetPendingEnrollmentsController";
import { GetPendingEnrollmentsUseCase } from "./GetPendingEnrollmentsUseCase";

const enrollmentRepository = new EnrollmentRepository();
const getPendingEnrollmentsUseCase = new GetPendingEnrollmentsUseCase(enrollmentRepository);
const getPendingEnrollmentsController = new GetPendingEnrollmentsController(getPendingEnrollmentsUseCase);

export { getPendingEnrollmentsController };