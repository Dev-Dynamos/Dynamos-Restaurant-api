import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";
import { GetDepartmentController } from "./getDepartmentController";
import { GetDepartmentUseCase } from "./getDepartmentUseCase";

const departmentRepository = new DepartmentRepository()
const getDepartmentUseCase = new GetDepartmentUseCase(departmentRepository)
const getDepartmentController = new GetDepartmentController(getDepartmentUseCase)

export { getDepartmentController }