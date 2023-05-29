import { OrganizationRepository } from "../../repositories/implementation/OrganizationRepository";
import { DeleteOrganizationController } from "./deleteOrganizationController";
import { DeleteOrganizationUseCase } from "./deleteOrganizationUseCase";

const organizationRepository = new OrganizationRepository()
const deleteOrganizationUseCase = new DeleteOrganizationUseCase(organizationRepository)
const deleteOrganizationController = new DeleteOrganizationController(deleteOrganizationUseCase)

export { deleteOrganizationController }