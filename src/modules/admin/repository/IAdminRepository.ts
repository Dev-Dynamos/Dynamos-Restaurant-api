import { CreateAdminDTO } from "../adminDTOs/CreateAdminDTO";
import { Admin } from "../model/Admin";

export interface IAdminRepository {
  create: ({ name, email, password }: CreateAdminDTO) => Promise<Admin>;
}
