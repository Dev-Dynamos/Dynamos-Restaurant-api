import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";
import { UpdateDepartmentController } from "./updateDepartmentController";
import { UpdateDepartmentUseCase } from "./updateDepartmentUseCase";

const departmentRepository = new DepartmentRepository()
const updateDepartmentUseCase = new UpdateDepartmentUseCase(departmentRepository)
const updateDepartmentController = new UpdateDepartmentController(updateDepartmentUseCase)

export { updateDepartmentController }