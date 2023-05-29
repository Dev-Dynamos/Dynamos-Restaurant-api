import { RequestError } from "../../../../typeErrors/error-api";
import { OrganizationDTO } from "../../dtos";
import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";

export class CreateOrganizationUseCase {
  constructor(private organizationRepository: OrganizationRepository){}

  async execute({ escolaId }: OrganizationDTO){
    const schoolExists = await this.organizationRepository.findSchoolById(escolaId)

    if(!schoolExists) throw new RequestError("Escola não encontrada.", 404)
    const schoolAlreadyHasAnOrganization = await this.organizationRepository.findBySchoolId(escolaId)
    if(schoolAlreadyHasAnOrganization) throw new RequestError("Já há um organigrama nesta escola.", 400)
    const newOrganization = await this.organizationRepository.save({ escolaId })
    return newOrganization

  }
}