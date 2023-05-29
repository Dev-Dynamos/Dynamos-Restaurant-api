import { RequestError } from "../../../../typeErrors/error-api";
import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";

export class DeleteOrganizationUseCase {
  constructor(private organizationRepository: OrganizationRepository){}

  async execute(id: string){
    const organizationExists = await this.organizationRepository.findById(id)

    if(!organizationExists) throw new RequestError("Organigrama não encontrado.", 404)

    const deletedOrganization = await this.organizationRepository.delete(id)
    return deletedOrganization
  }
}