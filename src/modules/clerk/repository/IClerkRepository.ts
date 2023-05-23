import { CreateClerkDTO } from "../ClerkDTOs/CreateClerkDTO";
import { Clerk } from "../model/Clerk";

export interface IClerkRepository {
  create({ name }: CreateClerkDTO): Promise<Clerk>;
}
