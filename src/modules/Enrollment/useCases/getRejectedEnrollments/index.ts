import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository"
import { GetRejectedEnrollmentsController } from "./GetRejectedEnrollmentsController";
import { GetRejectedEnrollmentsUseCase } from "./GetRejectedEnrollmentsUseCase";

const enrollmentRepository = new EnrollmentRepository();
const getRejectedEnrollmentsUseCase = new GetRejectedEnrollmentsUseCase(enrollmentRepository);
const getRejectedEnrollmentsController = new GetRejectedEnrollmentsController(getRejectedEnrollmentsUseCase);

export { getRejectedEnrollmentsController };