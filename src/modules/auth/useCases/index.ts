import { UserRepository } from "../../Usuario/repositories/implementation/UserRepository";
import { AuthUserController } from "./authUserController";
import { AuthUserUseCase } from "./authUserUseCase";


const userRepository = new UserRepository()
const authUserUseCase = new AuthUserUseCase(userRepository)
const authUserController = new AuthUserController(authUserUseCase)

export { authUserController }