import { CreateAdminDTO } from "../adminDTOs/CreateAdminDTO";
import { Admin } from "../model/Admin";

export interface IAdminRepository {
  create: ({ name, email, password }: CreateAdminDTO) => Promise<Admin>;
  get: () => Promise<Admin[]>;
  delete: (id: string) => Promise<Admin>;
}
