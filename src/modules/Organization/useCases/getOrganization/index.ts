import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";
import { GetOrganizationController } from "./getOrganizationController";
import { GetOrganizationUseCase } from "./getOrganizationUseCase";

const organizationRepository = new OrganizationRepository()
const getOrganizationUseCase = new GetOrganizationUseCase(organizationRepository)
const getOrganizationController = new GetOrganizationController(getOrganizationUseCase)

export { getOrganizationController }