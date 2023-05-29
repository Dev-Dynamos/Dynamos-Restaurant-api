import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";
import { GetOrganizationsController } from "./getOrganizationsController";
import { GetOrganizationsUseCase } from "./getOrganizationsUseCase";

const organizationRepository = new OrganizationRepository()
const getOrganizationsUseCase = new GetOrganizationsUseCase(organizationRepository)
const getOrganizationsController = new GetOrganizationsController(getOrganizationsUseCase)

export { getOrganizationsController }