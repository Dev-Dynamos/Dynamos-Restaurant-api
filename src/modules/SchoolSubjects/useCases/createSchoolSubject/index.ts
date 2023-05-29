import { SchoolSubjectRepository } from "../../repositories/implementations/SchoolSubjectRepository";
import { CreateSchoolSubjectController } from "./CreateSchoolSubjectController";
import { CreateSchoolSubjectUseCase } from "./CreateSchoolSubjectUseCase";



const schoolSubjectRepository = new SchoolSubjectRepository();
const createSchoolSubjectUseCase = new CreateSchoolSubjectUseCase(schoolSubjectRepository);
const createSchoolSubjectController = new CreateSchoolSubjectController(createSchoolSubjectUseCase);

export { createSchoolSubjectController };