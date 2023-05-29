import { SchoolSubjectRepository } from "../../repositories/implementations/SchoolSubjectRepository";
import { UpdateSchoolSubjectController } from "./UpdateSchoolSubjectController";
import { UpdateSchoolSubjectUseCase } from "./UpdateSchoolSubjectUseCase";


const schoolSubjectRepository = new SchoolSubjectRepository();
const updateSchoolSubjectUseCase = new UpdateSchoolSubjectUseCase(schoolSubjectRepository);
const updateSchoolSubjectController = new UpdateSchoolSubjectController(updateSchoolSubjectUseCase);

export { updateSchoolSubjectController };