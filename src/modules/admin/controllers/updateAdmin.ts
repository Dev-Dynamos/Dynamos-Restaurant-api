import { AdminRepository } from "../repository/implement/AdminRepository";
import { UpdateAdminUseCase } from "../useCases/UpdateAdminUseCase";
import { UpdateAdminController } from "./UpdateAdminController";

const adminRepository = new AdminRepository();
const updateAdminUseCase = new UpdateAdminUseCase(adminRepository);
const updateAdminController = new UpdateAdminController(updateAdminUseCase);

export { updateAdminController };
