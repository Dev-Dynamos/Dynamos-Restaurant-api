import { AdminRepository } from "../repository/implement/AdminRepository";
import { CreateAdminUseCase } from "../useCases/CreateAdminUseCase";
import { CreateAdminController } from "./CreateAdminController";

const adminRepository = new AdminRepository();
const createAdminUseCase = new CreateAdminUseCase(adminRepository);
const createAdminController = new CreateAdminController(createAdminUseCase);

export { createAdminController };
