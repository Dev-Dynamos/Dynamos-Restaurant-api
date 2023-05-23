import { CreateClerkDTO } from "../../ClerkDTOs/CreateClerkDTO";
import { Clerk } from "../../model/Clerk";
import { IClerkRepository } from "../IClerkRepository";

export class ClerkRepository implements IClerkRepository {
  private clerks: Clerk[] = [{ id: "d8fregui", name: "freufioreifi" }];

  async create({ name }: CreateClerkDTO): Promise<Clerk> {
    const clerk = new Clerk(name);

    this.clerks.push(clerk);
    return clerk;
  }

  async get(): Promise<Clerk[]> {
    console.log(this.clerks);
    return this.clerks;
  }
}
