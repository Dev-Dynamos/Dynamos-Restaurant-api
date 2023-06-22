import { CreateClerkDTO, UpdateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { Clerk } from "../model/Clerk";

export interface IClerkRepository {
  create({ name, email, telefone, cargoId }: CreateClerkDTO): Promise<Clerk>;
  get(): Promise<Clerk[]>;
  delete: (id: string) => Promise<Clerk>;
  update({
    id,
    name,
    email,
    telefone,
    cargoId,
  }: UpdateClerkDTO): Promise<Clerk>;
}
