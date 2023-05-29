import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";
import { GetEnrollmentsController } from "./GetEnrollmentsController";
import { GetEnrollmentsUseCase } from "./GetEnrollmentsUseCase";

const schoolRepository = new SchoolRepository();
const getEnrollmentsUseCase = new GetEnrollmentsUseCase(schoolRepository);
const getEnrollmentsController = new GetEnrollmentsController(getEnrollmentsUseCase);

export { getEnrollmentsController };