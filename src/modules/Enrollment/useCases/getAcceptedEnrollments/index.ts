import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository"
import { GetAcceptedEnrollmentsController } from "./GetAcceptedEnrollmentsController";
import { GetAcceptedEnrollmentsUseCase } from "./GetAcceptedEnrollmentsUseCase";

const enrollmentRepository = new EnrollmentRepository();
const getAcceptedEnrollmentsUseCase = new GetAcceptedEnrollmentsUseCase(enrollmentRepository);
const getAcceptedEnrollmentsController = new GetAcceptedEnrollmentsController(getAcceptedEnrollmentsUseCase);

export { getAcceptedEnrollmentsController };