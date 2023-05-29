import { RequestError } from "../../../../typeErrors/error-api";
import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";

export class GetOrganizationUseCase {
  constructor(private organizationRepository: OrganizationRepository){}

  async execute(id: string){
    const organization = await this.organizationRepository.findById(id)

    if(!organization) throw new RequestError("Organigrama não encontrado", 404);

    return organization
  }
}