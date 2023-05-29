import { RequestError } from "../../../../typeErrors/error-api";
import { OrganizationDTO } from "../../dtos";
import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";

export class UpdateOrganizationUseCase {
  constructor(private organizationRepository: OrganizationRepository){}

  async execute({ id, escolaId }: OrganizationDTO){
    const organizationExists = await this.organizationRepository.findById(id)

    if(!organizationExists) throw new RequestError("Organigrama não encontrado.", 404)

    const updatedOrganization = await this.organizationRepository.update({id, escolaId})
    return updatedOrganization
  }
}