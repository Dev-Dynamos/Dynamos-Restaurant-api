import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";
import { DeleteDepartmentController } from "./deleteDepartmentController";
import { DeleteDepartmentUseCase } from "./deleteDepartmentUseCase";

const departmentRepository = new DepartmentRepository()
const deleteDepartmentUseCase = new DeleteDepartmentUseCase(departmentRepository)
const deleteDepartmentController = new DeleteDepartmentController(deleteDepartmentUseCase)

export { deleteDepartmentController }