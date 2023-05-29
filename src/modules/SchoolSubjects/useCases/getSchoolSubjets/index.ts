import { SchoolSubjectRepository } from "../../repositories/implementations/SchoolSubjectRepository";
import { GetSchoolSubjectsController } from "./GetSchoolSubjectsController";
import { GetSchoolSubjectsUseCase } from "./GetSchoolSubjectsUseCase";

const schoolSubjectRepository = new SchoolSubjectRepository();
const getSchoolSubjectsUseCase = new GetSchoolSubjectsUseCase(schoolSubjectRepository);
const getSchoolSubjectsController = new GetSchoolSubjectsController(getSchoolSubjectsUseCase);

export { getSchoolSubjectsController };