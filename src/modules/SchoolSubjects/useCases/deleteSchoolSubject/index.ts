import { SchoolSubjectRepository } from "../../repositories/implementations/SchoolSubjectRepository";
import { DeleteSchoolSubjectController } from "./DeleteSchoolSubjectController";
import { DeleteSchoolSubjectUseCase } from "./DeleteSchoolSubjectUseCase";


const schoolSubjectRepository = new SchoolSubjectRepository();
const deleteSchoolSubjectUse = new DeleteSchoolSubjectUseCase(schoolSubjectRepository);
const deleteSchoolSubjectController = new DeleteSchoolSubjectController(deleteSchoolSubjectUse);

export { deleteSchoolSubjectController };