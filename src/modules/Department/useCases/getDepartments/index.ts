import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";
import { GetDepartmentsController } from "./getDepartmentsController";
import { GetDepartmentsUseCase } from "./getDepartmentsUseCase";

const departmentRepository = new DepartmentRepository()
const getDepartmentsUseCase = new GetDepartmentsUseCase(departmentRepository)
const getDepartmentsController = new GetDepartmentsController(getDepartmentsUseCase)

export { getDepartmentsController }
