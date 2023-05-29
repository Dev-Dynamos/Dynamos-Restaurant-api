import {  UserRepository } from "../../repositories/implementation/UserRepository";
import { GetUsersUseCase } from "./getUserUseCase";
import { GetUsersController  } from "./getUserController";

const userRepository = new UserRepository()
const getUsersUseCase = new GetUsersUseCase(userRepository)
const getUsersController = new GetUsersController(getUsersUseCase)

export { getUsersController }