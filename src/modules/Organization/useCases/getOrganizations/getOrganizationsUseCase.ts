import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";

export class GetOrganizationsUseCase {
  constructor(private organizationRepository: OrganizationRepository){}

  async execute(){
    const organizations = await this.organizationRepository.getOrganizations()

    return organizations
  }
}