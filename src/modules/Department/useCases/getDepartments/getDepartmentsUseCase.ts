import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";

export class GetDepartmentsUseCase {
  constructor(private departmentRepository: DepartmentRepository){}

  async execute(){
    const departments = await this.departmentRepository.getDepartaments()

    return departments
  }
}