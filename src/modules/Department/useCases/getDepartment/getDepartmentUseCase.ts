import { RequestError } from "../../../../typeErrors/error-api";
import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";

export class GetDepartmentUseCase {
  constructor(private departmentRepository: DepartmentRepository){}

  async execute(id: string){
    const department = await this.departmentRepository.findById(id)

    if(!department) throw new RequestError("Departamento não encontrado.", 404)

    return department
  }
}