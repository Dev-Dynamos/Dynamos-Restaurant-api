import { AuthenticationController } from "./AuthenticationController";
import { AuthenticationUseCase } from "../useCases/AuthenticationUseCase";
import { AdminRepository } from "../../admin/repository/implement/AdminRepository";


const adminRepository = new AdminRepository();
const authenticationUseCase = new AuthenticationUseCase(adminRepository);
const authenticationController = new AuthenticationController(authenticationUseCase);

export { authenticationController }