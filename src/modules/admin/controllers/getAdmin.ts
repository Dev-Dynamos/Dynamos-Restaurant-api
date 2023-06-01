import { AdminRepository } from "../repository/implement/AdminRepository";
import { GetAdminUseCase } from "../useCases/GetAdminUseCase";
import { GetAdminController } from "./GetAdminController";

const adminRepository = new AdminRepository();
const getAdminUseCase = new GetAdminUseCase(adminRepository);
const getAdminController = new GetAdminController(getAdminUseCase);

export { getAdminController };
