import { AuthenticationController } from "./AuthenticationController";
import { AuthenticationUseCase } from "../useCases/AuthenticationUseCase";
import { AdminRepository } from "../../admin/repository/implement/AdminRepository";
import { ClientRepository } from "../../client/repository/implement/ClientRepository";


const adminRepository = new AdminRepository();
const clientRepository = new ClientRepository()
const authenticationUseCase = new AuthenticationUseCase(adminRepository, clientRepository);
const authenticationController = new AuthenticationController(authenticationUseCase);

export { authenticationController }