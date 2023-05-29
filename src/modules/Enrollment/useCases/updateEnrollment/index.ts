import { EnrollmentRepository } from "../../repositories/implementations/EnrollmentRepository";
import { UpdateEnrollmentController } from "./UpdateEnrollmentController";
import { UpdateEnrollmentUseCase } from "./UpdateEnrollmentUseCase";


const enrollmentRepository = new EnrollmentRepository();
const updateEnrollmentUseCase = new UpdateEnrollmentUseCase(enrollmentRepository);
const updateEnrollmentController = new UpdateEnrollmentController(updateEnrollmentUseCase);

export { updateEnrollmentController }
