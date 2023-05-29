import { RoleRepository } from "../../repositories/implementation/RoleRepository";
import { GetRoleController } from "./getRoleController";
import { GetRoleUseCase } from "./getRoleUseCase";

const roleRepository = new RoleRepository()
const getRoleUseCase = new GetRoleUseCase(roleRepository)
const getRoleController = new GetRoleController(getRoleUseCase)

export { getRoleController }