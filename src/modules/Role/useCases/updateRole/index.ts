import { RoleRepository } from "../../repositories/implementation/RoleRepository";
import { UpdateRoleController } from "./updateRoleController";
import { UpdateRoleUseCase } from "./updateRoleUseCase";

const roleRepository = new RoleRepository()
const updateRoleUseCase = new UpdateRoleUseCase(roleRepository)
const updateRoleController = new UpdateRoleController(updateRoleUseCase)

export { updateRoleController }