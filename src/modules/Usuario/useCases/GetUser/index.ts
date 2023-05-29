import { UserRepository } from "../../repositories/implementation/UserRepository";
import { GetUserUseCase } from "./getUserUseCase";
import { GetActivityController } from "./getUserController";

const userRepository = new UserRepository()
const getUserUseCase = new GetUserUseCase(userRepository)
const getUserController = new GetActivityController(getUserUseCase)

export { getUserController }