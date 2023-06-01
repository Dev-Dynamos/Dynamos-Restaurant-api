import { CreateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { Clerk } from "../model/Clerk";

export interface IClerkRepository {
  create({ name, email, telefone, cargoId }: CreateClerkDTO): Promise<Clerk>;
  get(): Promise<Clerk[]>;
}
