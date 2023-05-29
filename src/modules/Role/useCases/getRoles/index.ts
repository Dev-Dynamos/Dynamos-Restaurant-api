import { RoleRepository } from "../../repositories/implementation/RoleRepository";
import { GetRolesController } from "./getRolesController";
import { GetRolesUseCase } from "./getRolesUseCase";

const roleRepository = new RoleRepository()
const getRolesUseCase = new GetRolesUseCase(roleRepository)
const getRolesController = new GetRolesController(getRolesUseCase)

export { getRolesController }