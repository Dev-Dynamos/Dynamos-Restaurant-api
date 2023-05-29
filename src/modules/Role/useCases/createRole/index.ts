import { RoleRepository } from "../../repositories/implementation/RoleRepository";
import { CreateRoleController } from "./createRoleController";
import { CreateRoleUseCase } from "./createRoleUseCase";

const roleRepository = new RoleRepository()
const createRoleUseCase = new CreateRoleUseCase(roleRepository)
const createRoleController = new CreateRoleController(createRoleUseCase)

export { createRoleController }