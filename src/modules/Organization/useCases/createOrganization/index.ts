import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";
import { CreateOrganizationController } from "./createOrganizationController";
import { CreateOrganizationUseCase } from "./createOrganizationUseCase";

const organizationRepository = new OrganizationRepository()
const createOrganizationUseCase = new CreateOrganizationUseCase(organizationRepository)
const createOrganizationController = new CreateOrganizationController(createOrganizationUseCase)

export { createOrganizationController }