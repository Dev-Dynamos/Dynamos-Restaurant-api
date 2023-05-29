import { SchoolSubjectRepository } from "../../repositories/implementations/SchoolSubjectRepository";
import { GetSchoolSubjectController } from "./GetSchoolSubjectController";
import { GetSchoolSubjectUseCase } from "./GetSchoolSubjectUseCase";


const schoolSubjectRepository = new SchoolSubjectRepository();
const getSchoolSubjectUseCase = new GetSchoolSubjectUseCase(schoolSubjectRepository);
const getSchoolSubjectController = new GetSchoolSubjectController(getSchoolSubjectUseCase);

export { getSchoolSubjectController };