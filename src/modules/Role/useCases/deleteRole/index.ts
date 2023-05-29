import { RoleRepository } from "../../repositories/implementation/RoleRepository";
import { DeleteRoleController } from "./deleteRoleController";
import { DeleteRoleUseCase } from "./deleteRoleUseCase";

const roleRepository = new RoleRepository()
const deleteRoleUseCase = new DeleteRoleUseCase(roleRepository)
const deleteRoleController = new DeleteRoleController(deleteRoleUseCase)

export { deleteRoleController }