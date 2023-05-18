import { Admin } from "../core/admin";

export interface AdminRepository {
  createAdmin(props: Admin): Promise<void>;
}
