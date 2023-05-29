import { UserRepository } from "../../repositories/implementation/UserRepository";
import { UpdateUserUseCase } from "./updateUserUseCase";
import { UpdateUserController } from "./updateUserController";

const userRepository = new UserRepository()
const updateUserUseCase = new UpdateUserUseCase(userRepository)
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }