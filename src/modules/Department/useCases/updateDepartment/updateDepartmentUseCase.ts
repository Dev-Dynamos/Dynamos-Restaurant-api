import { RequestError } from "../../../../typeErrors/error-api";
import { DepartmentDTO } from "../../dtos";
import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";

export class UpdateDepartmentUseCase {
  constructor(private departmentRepository: DepartmentRepository){}

  async execute({id, nome, organigramaId}: DepartmentDTO){
    const departmentExists = await this.departmentRepository.findById(id)

    if(!departmentExists) throw new RequestError("Departamento não encontrado.", 404)

    const updatedDepartment = await this.departmentRepository.update({id, nome, organigramaId})
    return updatedDepartment    
  }
}