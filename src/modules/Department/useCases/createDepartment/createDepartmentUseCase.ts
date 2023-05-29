import { RequestError } from "../../../../typeErrors/error-api";
import { DepartmentDTO } from "../../dtos";
import { DepartmentRepository } from "../../repositories/implementation/DepartmentRepository";

export class CreateDepartmentUseCase {
  constructor(private departmentRepository: DepartmentRepository){}

  async execute({ nome, organigramaId }: DepartmentDTO){
    const organizationExists = await this.departmentRepository.findOrganizationById(organigramaId)
    const departmentAlreadyExistsInOrganization = await this.departmentRepository.findDepartamentByOrganization(organigramaId)
    if(!organizationExists) throw new RequestError("Organigrama não encontrado.", 404)

    if(!nome || !organigramaId) throw new RequestError("preencha todos os campos!", 400)

    const departament = await this.departmentRepository.findByName(nome)
    if(departament) throw new RequestError("Departamento já existe.", 400)

    if(departmentAlreadyExistsInOrganization) throw new RequestError("Departamento já existe neste organigrama.", 400)

    const newDepartment = await this.departmentRepository.save({ nome, organigramaId })
    return newDepartment
  }
}