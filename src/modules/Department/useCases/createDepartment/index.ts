import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";
import { CreateDepartmentController } from "./createDepartmentController";
import { CreateDepartmentUseCase } from "./createDepartmentUseCase";

const departmentRepository = new DepartmentRepository()
const createDepartmentUseCase = new CreateDepartmentUseCase(departmentRepository)
const createDepartmentController = new CreateDepartmentController(createDepartmentUseCase)

export { createDepartmentController }