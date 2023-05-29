import { RequestError } from "../../../../typeErrors/error-api";
import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";

export class DeleteDepartmentUseCase {
  constructor(private departmentRepository: DepartmentRepository){}

  async execute(id: string){
    const departmentExists = await this.departmentRepository.findById(id)

    if(!departmentExists) throw new RequestError("Departamento não encontrado.", 404)

    const deletedDepartment = await this.departmentRepository.delete(id)
    return deletedDepartment
  }
}