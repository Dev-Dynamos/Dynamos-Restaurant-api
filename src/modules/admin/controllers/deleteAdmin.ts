import { AdminRepository } from "../repository/implement/AdminRepository";
import { DeleteAdminUseCase } from "../useCases/DeleteAdminUseCase";
import { DeleteAdminController } from "./DeleteAdminController";

const adminRepository = new AdminRepository();
const deleteAdminUseCase = new DeleteAdminUseCase(adminRepository);
const deleteAdminController = new DeleteAdminController(deleteAdminUseCase);

export { deleteAdminController };
