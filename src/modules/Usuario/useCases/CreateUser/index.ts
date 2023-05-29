import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";
import { UserRepository } from "../../repositories/implementation/UserRepository";

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }