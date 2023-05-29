import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";
import { UpdateOrganizationController } from "./updateOrganizationController";
import { UpdateOrganizationUseCase } from "./updateOrganizationUseCase";

const organizationRepository = new OrganizationRepository()
const updateOrganizationUseCase = new UpdateOrganizationUseCase(organizationRepository)
const updateOrganizationController = new UpdateOrganizationController(updateOrganizationUseCase)

export { updateOrganizationController }

